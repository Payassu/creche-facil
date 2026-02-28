import { useParams } from 'react-router-dom';

export default function InstitutionDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Institution Details</h1>
      <p>Viewing details for institution ID: {id}</p>
    </div>
  );
}
