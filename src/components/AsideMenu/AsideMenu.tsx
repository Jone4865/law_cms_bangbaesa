import { useLayoutEffect, useState } from "react";
import { Menu, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import { menuItems } from "../../utils/menuItems";
import useResponsive from "../../hooks/useResponsive";
import { useRecoilState } from "recoil";
import { userTokenState } from "../../recoil/atoms/userToken";
import { useMutation } from "@apollo/client";
import { SIGN_OUT_BY_ADMIN } from "../../graphql/mutation/signOutByAdmin";

type MenuInfo = {
  key: string;
  keyPath: string[];
};

type MenuData = {
  subMenu?: string;
  item: string;
};

export function AsideMenu() {
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState<MenuData>({
    subMenu: "",
    item: "",
  });

  const navigator = useNavigate();
  const { pathname } = useLocation();
  const { isLessThanEitherMobile } = useResponsive();
  const [, setTokenInfo] = useRecoilState(userTokenState);

  const handleLogout = () => {
    signOutByAdmin();
  };

  const handleMoveHome = () => {
    navigator("/");
  };

  const handleClickMenu = (e: MenuInfo) => {
    const [item, subMenu] = e.keyPath;
    if (subMenu) {
      const [, path] = item.split("-");
      setMenu({
        item,
        subMenu,
      });
      return navigator(`/${subMenu}/${path}`);
    } else {
      if (item === "dashboard") {
        return handleMoveHome();
      }
      if (item === "logout") {
        return handleLogout();
      }
      setMenu({
        item,
        subMenu: "",
      });
      return navigator(`/${item}`);
    }
  };

  const handleChangeSubMenu = (openKeys: string[]) => {
    if (openKeys.length < 1) {
      return setMenu((prev) => ({ ...prev, subMenu: "" }));
    }

    const [, subMenu] = openKeys;
    setMenu((prev) => ({ ...prev, subMenu }));
  };

  useLayoutEffect(() => {
    const [, subMenu, item] = pathname.split("/");
    if (!subMenu.length) {
      return setMenu({ item: "dashboard", subMenu: "" });
    }
    if (!item) {
      return setMenu({ item: subMenu, subMenu: "" });
    }

    setMenu({ item: `${subMenu}-${item}`, subMenu });
  }, [pathname]);

  const [signOutByAdmin] = useMutation(SIGN_OUT_BY_ADMIN, {
    onCompleted: () => {
      setTokenInfo({
        hasToken: false,
      });
    },
    onError: (e) => {
      message.error(e.message ?? `${e}`);
    },
    fetchPolicy: "no-cache",
  });

  return (
    <>
      {visible && isLessThanEitherMobile && (
        <S.Mask
          onClick={() => {
            setVisible(false);
            window.document.body.style.overflowY = "auto";
          }}
        />
      )}
      {isLessThanEitherMobile && (
        <S.NavTop>
          <S.HeaderImage
            src={"/img/logo/logo.png"}
            alt="로고"
            onClick={handleMoveHome}
          />
          <S.MenuIcon>
            <MenuOutlined
              style={{
                fontSize: 20,
              }}
              onClick={() => {
                setVisible(true);
                window.document.body.style.overflowY = "hidden";
              }}
            />
          </S.MenuIcon>
        </S.NavTop>
      )}
      {(!isLessThanEitherMobile || visible) && (
        <S.Sider>
          <S.ImageWrap onClick={handleMoveHome}>
            <S.Image alt="logo" src={"/img/logo/logo.png"} />
          </S.ImageWrap>

          <Menu
            theme={isLessThanEitherMobile ? "light" : "dark"}
            mode="inline"
            onClick={handleClickMenu}
            onOpenChange={handleChangeSubMenu}
            openKeys={[menu.subMenu ?? ""]}
            selectedKeys={[menu.item]}
            items={menuItems}
          />
        </S.Sider>
      )}
    </>
  );
}
