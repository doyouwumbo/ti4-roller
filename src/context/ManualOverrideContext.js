import React, { createContext, useState } from 'react'


export const MOContext = createContext(null)

function ManualOverrideContext(props) {
  const [manualOverride, setManualOverride] = useState(0);
  const [extraRolls, setExtraRolls] = useState(0);

  const value = {manualOverride, setManualOverride, extraRolls, setExtraRolls}

  return (<MOContext.Provider value={value}>{props.children}</MOContext.Provider>);
}

export default ManualOverrideContext