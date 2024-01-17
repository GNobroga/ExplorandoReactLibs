import React from 'react';
import Input from './components/input';
import Button from './components/button';
import './App.scss';
import Divider from './components/divider';
import Background from './components/background';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import userStore from './store/userStore';


interface IUser {
  email: string;
  password: string;
}

const user = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string()
    .min(5, 'A senha precisa ter no mínimo 5 caracteres')
    .max(100, 'A senha pode ter no máximo 100 caracteres')
})

function App() {

  const userState = userStore(state => state.user);
  const dispatch = userStore(state => state.dispatch);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<IUser>({
    resolver: zodResolver(user),
  });

  React.useEffect(() => {
    console.log(userState);
  }, [userState]);

  const logIn = () => {
    dispatch({type: 'setUser', payload: { user: getValues() }})
  }

  return (
    <form className="app" onSubmit={handleSubmit(logIn)}>
      <Background color='#4E68A1'/>
      <Input label='Email' {...register('email')} hasError={errors.email != null} errorMessage={errors.email?.message}/>
      <Input label='Password' {...register('password')} hasError={errors.password != null} errorMessage={errors.password?.message} />
      <Button content='Log in' background='#4E68A1' onClick={() => null } type='submit'/>
      <p>Esqueceu a senha?</p>
      <Divider content='Ou'/>
      <Button content='Crie uma nova conta' background='#00A400' type='button'/>
    </form>
  );
}

export default App
