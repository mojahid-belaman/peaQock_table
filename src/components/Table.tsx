import Eye from "../assets/svg/Eye";

const tables = [
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
  {
    user: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    date: "December 21, 2021",
    action: <Eye />,
  },
];

function Table() {
  return (
    <table className="table-auto w-[80%] m-auto">
      <thead>
        <tr className="text-left text-[#A7ABAD] text-[14px]">
          <th className="pb-5">User</th>
          <th className="pb-5">Email</th>
          <th className="pb-5">Country of residency</th>
          <th className="pb-5">Company</th>
          <th className="pb-5">Registration Date</th>
          <th className="pb-5">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tables.map((table, index) => (
          <tr
            style={{ backgroundColor: index % 2 == 0 ? "#E6EAF0" : "#FFF" }}
            className="text-[#636F75] text-[14px] font-semibold"
          >
            <td className="py-5">{table.user}</td>
            <td className="py-5">{table.email}</td>
            <td className="py-5">{table.country}</td>
            <td className="py-5">{table.company}</td>
            <td className="py-5">{table.date}</td>
            <td className="py-5">{table.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
