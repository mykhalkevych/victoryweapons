import { useEffect, useState } from 'react';
import SomeAdminComponent from '../components/admin/SomeAdminComponent';
import { addDoc, collection, getDocs } from '@firebase/firestore';
import { db } from '../config/firebase';

type Props = {};

export default function AdminPage({}: Props) {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<any>([]);

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'todos'), {
        todo: todo,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const fetchPost = async () => {
    await getDocs(collection(db, 'todos')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      Admin panel
      <SomeAdminComponent />
    </div>
  );
}
