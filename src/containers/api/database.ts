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
    let customer = await this.ExecuteQuery(
      'CREATE TABLE IF NOT EXISTS bl_customers (id INTEGER PRIMARY KEY NOT NULL, customerName Text,customerNo Text ,imei1 Text, created_date  TIMESTAMP DEFAULT CURRENT_TIMES);',
      [],
    );
    let service = await this.ExecuteQuery(
      'CREATE TABLE IF NOT EXISTS bl_service (id INTEGER PRIMARY KEY NOT NULL, customerName Text,serviceName Text ,serviceDate Text,serviceCharge Text, created_date  TIMESTAMP DEFAULT CURRENT_TIMES);',
      [],
    );
    console.log(service);
  }
}
