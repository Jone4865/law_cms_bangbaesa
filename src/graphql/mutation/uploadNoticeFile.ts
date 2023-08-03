import { gql } from "@apollo/client";

export const UPLOAD_NOTICE_FILE = gql`
  mutation uploadNoticeFile($file: Upload!) {
    uploadNoticeFile(file: $file)
  }
`;
