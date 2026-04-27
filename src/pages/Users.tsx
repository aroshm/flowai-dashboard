import useHeader from "../components/table/useHeader";
import UserTable from "../components/table/UserTable";

type UserProps = {
  header?: string;
};

const Users = ({ header = "Users" }: UserProps) => {
  useHeader(header);
  return <UserTable itemsPerPage={12} showPaginations={false} />;
};

export default Users;
