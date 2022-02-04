import Bank from "./Bank";
import Current_Count from "./Current_Count" ;
import Customer from "./Customer"
describe('Result Add Customer and Account', () => {
    const banco = new Bank();
    const customerHelp = new Customer('1236456','saly','fuertes','Av Satelite', '452685','455655');
    test(' Matriz Customer', () => {
        banco.addCustomers(customerHelp);
        expect(banco.getCustomers).toEqual(
        expect.arrayContaining([{"id": "1236456", 
                                "name": "saly", 
                                "lastName": "fuertes", 
                                "address": "Av Satelite", 
                                "cellPhone": "455655", 
                                "phone": "452685"}]),
      );
    });
    const accountHelp = new Current_Count('71236456', 0, customerHelp);
    test(' Matriz Accounts', () => {
        banco.addAccounts(accountHelp);
        expect(banco.getAccounts).toEqual(
        expect.arrayContaining([{ "identificador": "71236456", "interes": 0.11, "balance": 0,      
                                "block": false, "commission": 1.1,"limitWithdrawMoney": 0,                 
                                "pointAccounts": 0,
                                "customer": {"address": "Av Satelite", "cellPhone": "455655", 
                                "id": "1236456", "lastName": "fuertes", "name": "saly", 
                                "phone": "452685"}}]),
      );
    });
});

describe('Find Account', () => {
    const banco = new Bank();
    const customerHelp = new Customer('1236456','saly','fuertes','Av Satelite', '452685','455655');
    const accountHelp = new Current_Count('71236456-1565145', 0, customerHelp);
    banco.addAccounts(accountHelp);

    test('Element in array', () => {
      expect(banco.findAccount('71236456-1565145')).toBeTruthy();
    });
  
    test('Element out array', () => {
      expect(banco.findAccount('71236556-1565145')).toBeFalsy();
    });
});

describe('Find Customer', () => {
    const banco = new Bank();
    const customerHelp = new Customer('1236456','saly','fuertes','Av Satelite', '452685','455655');
    const accountHelp = new Current_Count('71236456-1565145', 0, customerHelp);
    banco.addCustomers(customerHelp);

    test('Element in array', () => {
      expect(banco.findCustomer('1236456')).toBeTruthy();
    });
  
    test('Element out array', () => {
      expect(banco.findCustomer('71236556')).toBeFalsy();
    });
});

describe('Change Client', () => {
    const banco = new Bank();
    const customerHelp = new Customer('1236456','saly','fuertes','Av Satelite', '452685','455655');
    const accountHelp = new Current_Count('71236456-1565145', 0, customerHelp);
    const customerHelpOutList = new Customer('7896456','Taly','fuertes','Av Satelite', '452685','455655');
    const accountHelpTwo = new Current_Count('5646456-1565145', 0, customerHelpOutList);
    banco.addAccounts(accountHelp);
    banco.addCustomers(customerHelp);
    banco.addAccounts(accountHelpTwo);
    test('Client and Account found in listBank', () => {
      expect(banco.changeClient('1236456','71236456-1565145')).toBeTruthy();
    });
  
    test('Client not found in listBank', () => {
      expect(banco.changeClient('65465316','71236456-1565145')).toBeFalsy();
    });

    test('Account not found in listBank', () => {
        expect(banco.changeClient('1236456','546456-1565145')).toBeFalsy();
    });

    test('Account with client but not in listBank', () => {
        expect(banco.changeClient('7896456','5646456-1565145')).toBeFalsy();
    });
});