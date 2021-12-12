import AppLayout from "../components/AppLayout";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import "../styles/navbar.css";


export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

