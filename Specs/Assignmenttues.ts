//
//

import {element, by, browser, ExpectedConditions} from "protractor";
import {async} from "q";
import { AddCustomer } from "../pages/BankManagerTest/bankmanager";
let jsd= require('../Data/testdata');

//*Object creation 
var customerdetails = new AddCustomer();