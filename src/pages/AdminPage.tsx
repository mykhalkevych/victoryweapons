import SomeAdminComponent from '../components/admin/SomeAdminComponent';

type Props = {};

export default function AdminPage({}: Props) {
  return (
    <div>
      Admin panel
      <SomeAdminComponent />
    </div>
  );
}
