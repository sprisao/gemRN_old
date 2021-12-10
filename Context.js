import React, { useState, useContext, useEffect } from 'react';
import Airtable from 'airtable';
import { REACT_APP_AIRTABLE_API_KEY } from '@env';

const storeBase = new Airtable({ apiKey: REACT_APP_AIRTABLE_API_KEY }).base(
  'app0tAUATUh8jBxX4'
);

const Context = React.createContext();

const StoreProvider = ({ children }) => {
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);
  const [restaurantLoading, setRestaurantLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const [cafesLoading, setCafesLoading] = useState(true);

  const [restaurants, setRestaurants] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [menu, setMenu] = useState([]);

  const [firstCategories, setFirstCategories] = useState([]);
  const [secondCategories, setSecondCategories] = useState([]);
  const [locationCategories, setlocationCategories] = useState([]);

  const firstCategory = [];
  const secondCategory = [];
  const locationCategory = [];
  const restaurant = [];
  const cafe = [];
  const menuItem = [];

  // 맛집 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'restaurants',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            restaurant.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setRestaurants(restaurant);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('맛집 불러오기 성공');
            setRestaurantLoading(false);
          }
        }
      );
  }, []);

  // 카페 불러오기
  useEffect(() => {
    storeBase('stores')
      .select({
        view: 'cafes',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            cafe.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setCafes(cafe);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('카페 불러오기 성공');
            setCafesLoading(false);
          }
        }
      );
  }, []);

  // 세컨드카테고리 데이터 불러오기

  useEffect(() => {
    storeBase('secondCategoryData')
      .select({
        view: 'data',
        pageSize: 50,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            secondCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setSecondCategories(secondCategory);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('세컨드 카테고리 데이터 불러오기 성공');
            setSecondLoading(false);
          }
        }
      );
  }, []);

  // 카테고리 데이터 불러오기
  useEffect(() => {
    storeBase('firstCategoryData')
      .select({
        view: 'Grid view',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            firstCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setFirstCategories(firstCategory);
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

  useEffect(() => {
    storeBase('locationCategoryData')
      .select({
        view: 'dropdown',
        pageSize: 20,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            locationCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setlocationCategories(locationCategory);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('로케이션 카테고리 데이터 불러오기 성공');
            setLocationLoading(false);
          }
        }
      );
  }, []);

  // 메뉴 데이터 로딩

  useEffect(() => {
    storeBase('menu')
      .select({
        view: 'Grid view',
        pageSize: 100,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            menuItem.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          setMenu(menuItem);
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('메뉴 데이터 불러오기 성공');
            setMenuLoading(false);
          }
        }
      );
  }, []);

  return (
    <Context.Provider
      value={{
        categoryLoading,
        secondLoading,
        firstCategories,
        secondCategories,
        locationCategories,
        menuLoading,
        menu,
        restaurants,
        cafes,
      }}
    >
      {children}
    </Context.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, StoreProvider };
