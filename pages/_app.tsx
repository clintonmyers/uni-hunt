import { AppProps } from 'next/app';
import { Auth } from '@supabase/ui';
import supabase from '../lib/initSupabase';
import '../style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="dark">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  );
}

export default MyApp;
