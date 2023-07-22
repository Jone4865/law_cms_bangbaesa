import { gql } from '@apollo/client';

export const FIND_DASHBOARD_BY_ADMIN = gql`
  query findDashboardByAdmin {
    findDashboardByAdmin {
      users {
        count
        date
      }
      userInquiries {
        count
        date
      }
      offers {
        count
        date
      }
    }
  }
`;
