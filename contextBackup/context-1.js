import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';
import { REACT_APP_AIRTABLE_API_KEY } from '@env';

const storeBase = new Airtable({ apiKey: REACT_APP_AIRTABLE_API_KEY }).base(
  'app0tAUATUh8jBxX4'
);

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [secondCategories, setSecondCategories] = useState([]);

  const category = [];
  const secondCategory = [];
  // 카테고리 데이터 불러오기
  useEffect(() => {
    storeBase('firstCategoryData')
      .select({
        view: 'data',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            category.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setCategories(category);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('카테고리 데이터 불러오기 성공');
            setCategoryLoading(false);
          }
        }
      );
  }, []);

  return (
    <Context.Provider value={{ categories, categoryLoading }}>
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, StoreProvider };
