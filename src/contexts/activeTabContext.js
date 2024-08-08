import React from "react";

const ActiveTabContext = React.createContext({
    activeTab: null,
    seActiveModal: () => {},
});

export {ActiveTabContext};