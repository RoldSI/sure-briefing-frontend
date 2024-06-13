import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmail } from '../store/user';

function SignIn() {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailSignIn = async (e) => {
      e.preventDefault();
      dispatch(signInWithEmail({ email, password }));
    };

  return (
    <div className="p-4">
       <h2 className="text-2xl mb-4">Sign In</h2>
       <form onSubmit={handleEmailSignIn} className="mt-4">
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Email"
           className="input mb-2"
         />
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Password"
           className="input mb-2"
         />
         <button type="submit" className="btn btn-primary">Sign in with Email</button>
       </form>
       {status === 'loading' && <p>Loading...</p>}
       {error && <p>Error: {error}</p>}
     </div>
  );
}

// const SignIn = () => {
//   const dispatch = useDispatch();
//   const { status, error } = useSelector(state => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailSignIn = async (e) => {
//     e.preventDefault();
//     dispatch(signInWithEmail({ email, password }));
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl mb-4">Sign In</h2>
//       <form onSubmit={handleEmailSignIn} className="mt-4">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="input mb-2"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="input mb-2"
//         />
//         <button type="submit" className="btn btn-primary">Sign in with Email</button>
//       </form>
//       {status === 'loading' && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

export default SignIn;