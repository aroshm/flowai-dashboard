import usePageTitle from "../hooks/usePageTitle";
import UserTable from "../components/table/UserTable";

type UserProps = {
  header?: string;
};

const Users = ({ header = "Users" }: UserProps) => {
  usePageTitle(header);

  return (
    <UserTable itemsPerPage={12} showPaginations={false} showSearch={true} />
  );
};

export default Users;
