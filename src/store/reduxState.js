import React from 'react'
import { useState, useEffect } from "react";

const reduxState = (defaultItem, key) => {
  const [item, setItem] = useState(() => {
    const tokens = window.localStorage.getItem(key);
    return tokens !== null ? JSON.parse(tokens) : defaultItem;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(item));
  }, [key, item]);

  return [item, setItem];
};

export default reduxState;
