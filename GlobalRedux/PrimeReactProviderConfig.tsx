"use client"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';

const PrimeReactProviderConfig = ({ children }: { children: React.ReactNode }) => {
    return (
        <PrimeReactProvider>
            {children}
        </PrimeReactProvider>
    )
}

export default PrimeReactProviderConfig;