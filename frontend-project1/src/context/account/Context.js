import React, { createContext, useState } from 'react';

export const EmailContext = createContext();
export const PasswordContext = createContext();

export const EmailProvider = ({ children }) => {
    const [emailTrue, setValueEmailTrue] = useState(true);

    return (
        <EmailContext.Provider value={{ emailTrue, setValueEmailTrue }}>
            {children}
        </EmailContext.Provider>
    );
};

export const PasswordProvider = ({ children }) => {
    const [passwordTrue, setValuePasswordTrue] = useState(true);

    return (
        <PasswordContext.Provider value={{ passwordTrue, setValuePasswordTrue }}>
            {children}
        </PasswordContext.Provider>
    )
}