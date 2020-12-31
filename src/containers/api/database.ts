import React from 'react';
import SQLite from 'react-native-sqlite-storage';
export default class SQLiteScreen extends React.Component {
  constructor() {
    super();
    SQLite.DEBUG = true;
  }

  ExecuteQuery = (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.transaction((trans) => {
        trans.executeSql(
          sql,
          params,
          (trans, results) => {
            console.log(trans);
            console.log(results);
            resolve(results);
            return results;
          },
          (error) => {
            console.log('error');
            console.log(error);
            reject(error);
          },
        );
      });
    });
  // Create Table
  async CreateTable() {
    let Table = await this.ExecuteQuery(
      'CREATE TABLE IF NOT EXISTS bl_customers (id INTEGER PRIMARY KEY NOT NULL, customerName Text,customerNo Text ,imei1 Text, created_date  TIMESTAMP DEFAULT CURRENT_TIMES)',
      [],
    );
    console.log(Table);
  }
}
