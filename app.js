var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
        this._accounts = [];
        this._customers = [];
    }
    Bank.prototype.addAccounts = function (account) {
        this._accounts.push(account);
    };
    Object.defineProperty(Bank.prototype, "getAccounts", {
        get: function () {
            return this._accounts;
        },
        enumerable: false,
        configurable: true
    });
    Bank.prototype.addCustomers = function (customers) {
        this._customers.push(customers);
    };
    Object.defineProperty(Bank.prototype, "getCustomers", {
        get: function () {
            return this._customers;
        },
        enumerable: false,
        configurable: true
    });
    return Bank;
}());
var Customer = /** @class */ (function () {
    function Customer(id, nombre, lastName, cellPhone, addresses) {
        this.id = id;
        this.nombre = nombre;
        this.lastName = lastName;
        this.cellPhone = cellPhone;
        this.addresses = addresses;
        this.accounts = [];
    }
    Object.defineProperty(Customer.prototype, "setaccounts", {
        set: function (accounts) {
            this.accounts = accounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getaccounts", {
        get: function () {
            return this.accounts;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.addaccounts = function (account) {
        this.accounts.push(account);
    };
    Object.defineProperty(Customer.prototype, "setid", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getid", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setnombre", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getnombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setlastName", {
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getlastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setcellPhone", {
        set: function (cellPhone) {
            this.cellPhone = cellPhone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getcellPhone", {
        get: function () {
            return this.cellPhone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setaddresses", {
        set: function (addresses) {
            this.addresses = addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getaddresses", {
        get: function () {
            return this.addresses;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var Address = /** @class */ (function () {
    function Address(id, street, number, phone) {
        this._id = id;
        this.street = street;
        this.number = number;
        this.phone = phone;
    }
    ;
    Object.defineProperty(Address.prototype, "setId", {
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "getid", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "setstreet", {
        set: function (street) {
            this.street = street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "getstreet", {
        get: function () {
            return this.street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "setnumber", {
        set: function (number) {
            this.number = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "getnumber", {
        get: function () {
            return this.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "setphone", {
        set: function (phone) {
            this.phone = phone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "getphone", {
        get: function () {
            return this.phone;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
var Account = /** @class */ (function () {
    function Account(id, totalMoney, customer) {
        this.id = id;
        this._commission = 1.1;
        this.totalMoney = totalMoney;
        this._balance = this.totalMoney;
        this._pointAccounts = 0;
        this.customer = customer;
        this._block = false;
    }
    Object.defineProperty(Account.prototype, "setCommission", {
        set: function (commission) {
            this._commission = commission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getCommission", {
        get: function () {
            return this._commission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setCustomer", {
        set: function (customer) {
            this.customer = customer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getCustomer", {
        get: function () {
            return this.customer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getbalance", {
        get: function () {
            this._balance = this.totalMoney;
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "settotalMoney", {
        set: function (totalMoney) {
            this.totalMoney = totalMoney;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "gettotalMoney", {
        get: function () {
            return this.totalMoney;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setPointAccounts", {
        set: function (pointAccounts) {
            this._pointAccounts = pointAccounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getPointAccounts", {
        get: function () {
            return this._pointAccounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setblock", {
        set: function (block) {
            this._block = block;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getblock", {
        get: function () {
            return this._block;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.checkAccountData = function () {
        if (this.customer != null) {
            return this.id + ' ' + this.customer.getid + ' ' + this.customer.getnombre + ' ' + this.customer.getlastName + ' ' + this.customer.getcellPhone + ' ' + this.customer.getaddresses.getstreet + ' ' + this.customer.getaddresses.getnumber + ' ' + this.customer.getaddresses.getphone + ' saldo:' + this.totalMoney;
        }
        else {
            return 'Esta cuenta no esta asociada a ningún cliente';
        }
    };
    Account.prototype.enterMoney = function (money) {
        this.totalMoney += money;
        this._pointAccounts += Math.floor(money / 10);
        return 'Su saldo es: ' + this.totalMoney + ' sus puntos son: ' + this._pointAccounts;
    };
    Account.prototype.checkBalance = function () {
        console.log('El balance es:' + this._balance);
    };
    Account.prototype.changeClient = function (customer) {
        this.customer = customer;
    };
    return Account;
}());
var MonthlyReport = /** @class */ (function () {
    function MonthlyReport(account) {
        this._account = account;
    }
    MonthlyReport.prototype.ShowMonthlyReport = function () {
        var final_balance = this._account.getbalance + (this._account.gettotalMoney * this._account.getInteres / 100) - this._account.getCommission;
        console.log(final_balance);
    };
    return MonthlyReport;
}());
var Current_Count = /** @class */ (function (_super) {
    __extends(Current_Count, _super);
    function Current_Count(id, totalMoney, customer) {
        var _this = this;
        _this = _super.call(this, id, totalMoney, customer) || this,
            _this._interes = 0.11;
        return _this;
    }
    Current_Count.prototype.showMessage = function () {
        if (this.getCustomer != null)
            return 'Cuenta Corriente de ' + this.getCustomer.getnombre;
    };
    Object.defineProperty(Current_Count.prototype, "getInteres", {
        get: function () {
            return this._interes;
        },
        enumerable: false,
        configurable: true
    });
    Current_Count.prototype.withdrawMoney = function (money) {
        var limitWithdrawMoney = 0;
        if (this.gettotalMoney - money >= limitWithdrawMoney) {
            this.settotalMoney = this.gettotalMoney - money;
            console.log('Su saldo es: ' + this.gettotalMoney);
        }
        else {
            console.log('Accion invalida. Su saldo es: ' + this.gettotalMoney);
        }
    };
    return Current_Count;
}(Account));
var Housing_Account = /** @class */ (function (_super) {
    __extends(Housing_Account, _super);
    function Housing_Account(id, totalMoney, customer) {
        var _this = this;
        _this = _super.call(this, id, totalMoney, customer) || this,
            _this._interes = 0.22;
        _this.setCommission = 0;
        return _this;
    }
    Housing_Account.prototype.showMessage = function () {
        if (this.getCustomer != null)
            return 'Cuenta Housing Account de ' + this.getCustomer.getnombre;
    };
    Object.defineProperty(Housing_Account.prototype, "getInteres", {
        get: function () {
            return this._interes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Housing_Account.prototype, "getCommission", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    return Housing_Account;
}(Account));
var Investment_Fund = /** @class */ (function (_super) {
    __extends(Investment_Fund, _super);
    function Investment_Fund(id, totalMoney, customer) {
        var _this = this;
        _this = _super.call(this, id, totalMoney, customer) || this,
            _this._interes = 0.33;
        return _this;
    }
    Object.defineProperty(Investment_Fund.prototype, "getInteres", {
        get: function () {
            return this._interes;
        },
        enumerable: false,
        configurable: true
    });
    Investment_Fund.prototype.withdrawMoney = function (money) {
        var limitWithdrawMoney = -600;
        if (this.gettotalMoney - money >= limitWithdrawMoney) {
            this.settotalMoney = this.gettotalMoney - money;
            console.log('Su saldo es: ' + this.gettotalMoney);
        }
        else {
            this.setblock = true;
            console.log('Accion invalida. Su saldo es: ' + this.gettotalMoney);
        }
    };
    return Investment_Fund;
}(Account));
//Clientes
var direccion = new Address('001', 'Av. Maestro', '544', '62-45565');
var direccion2 = new Address('002', 'Calle Oruro', '45', '62-85469');
var cliente = new Customer('1', 'Saly', 'Ramos', '79453285', direccion);
var cliente2 = new Customer('1', 'Ruth', 'Ramirez', '74521368', direccion2);
//Cuentas
var cuentaCliente = new Current_Count('0001', 100, cliente);
var cuentaCliente2 = new Investment_Fund('0002', 50, cliente);
var cuentaCliente3 = new Current_Count('0003', 200, cliente2);
console.log(cuentaCliente3);
var cuentaCliente4 = new Housing_Account('0004', 20, cliente2);
var cuentaSinCliente = new Current_Count('0005', 100, null);
cliente.addaccounts(cuentaCliente);
cliente.addaccounts(cuentaCliente2);
cliente2.addaccounts(cuentaCliente3);
cliente2.addaccounts(cuentaCliente4);
//Banco
var banco = new Bank();
banco.addAccounts(cuentaCliente);
banco.addAccounts(cuentaCliente2);
banco.addAccounts(cuentaCliente3);
banco.addAccounts(cuentaCliente4);
banco.addAccounts(cuentaSinCliente);
banco.addCustomers(cliente);
banco.addCustomers(cliente2);
//Lista de cuentas y clientes
console.log('- Lista de cuentas y clientes');
console.log(banco);
//Check Account Data
console.log('- Check Account Data');
console.log(cuentaCliente.checkAccountData());
//Enter Money
console.log('- Enter Money: 55');
console.log(cuentaCliente.enterMoney(55));
//Withdraw Money
console.log('- Withdraw Money: 30');
cuentaCliente.withdrawMoney(30);
//Check Balance
console.log('- Check Balance');
cuentaCliente.checkBalance();
//Check Balance
console.log('- Change Client');
cuentaCliente3.changeClient(cliente);
console.log(cuentaCliente3);
//Monthly Report
console.log('- Monthly Report');
var ReporteMensual = new MonthlyReport(cuentaCliente);
console.log('balance:' + cuentaCliente.gettotalMoney + ' interes:' + cuentaCliente.getInteres + ' commision:' + cuentaCliente.getCommission);
ReporteMensual.ShowMonthlyReport();
var ReporteMensual2 = new MonthlyReport(cuentaCliente4);
console.log('Cuenta HA balance:' + cuentaCliente4.gettotalMoney + ' interes:' + cuentaCliente4.getInteres + ' commision:' + cuentaCliente4.getCommission);
ReporteMensual2.ShowMonthlyReport();
//Modificar comision
console.log('- Modificar comision:');
cuentaCliente.setCommission = 2, 2;
console.log('commision:' + cuentaCliente.getCommission);
cuentaCliente4.setCommission = 2, 2;
console.log('commision:' + cuentaCliente4.getCommission);
//Interest value
console.log('- Interest value:');
console.log('CC:' + cuentaCliente.getInteres);
console.log('IF:' + cuentaCliente2.getInteres);
console.log('HA:' + cuentaCliente4.getInteres);
//You cannot get more money from CC than there is
console.log('- CC');
console.log('You cannot get more money from CC than there is: -250');
cuentaCliente3.withdrawMoney(250);
console.log('- IF');
console.log('from IF you can get up to 600$ of red numbers : -250');
cuentaCliente2.withdrawMoney(250);
console.log('from IF you can get up to 600$ of red numbers : -1000');
cuentaCliente2.withdrawMoney(1000);
console.log('Cuenta bloqueada');
console.log(cuentaCliente2.getblock);
console.log('- HA');
console.log('- HA cannot withdraw money');
//A bank has points account, each time 10$ is entered, one account point is added.
console.log('- getPointAccounts');
console.log(cuentaCliente.getPointAccounts);
//
