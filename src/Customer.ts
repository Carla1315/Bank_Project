export default class Customer {
    private id: string;
    private name: string;
    private lastName: string;
    private cellPhone: string;
    private phone: string; 
    private address: string;

    constructor(
        id: string, 
        name: string, 
        lastName: string, 
        address: string, 
        phone: string, 
        cellPhone: string
    ){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.cellPhone = cellPhone;
        this.phone = phone;
        this.address = address;
    }
    
    public set setId(id :string) {
        this.id = id;
    }

    public get getId() :string {
        return this.id;
    }

    public set setName(name: string) {
        this.name = name;
    }
    
    public get getName(): string {
        return this.name
    }
    
    public set setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public get getLastName(): string {
        return this.lastName
    }
    
    public set setCellPhone(cellPhone: string) {
        this.cellPhone = cellPhone;
    }
    
    public get getCellPhone(): string {
        return this.cellPhone
    }
    
    public set setAddress(address: string) {
        this.address = address;
    }
    
    public get getAddress() : string {
        return this.address;
    }
    
    public set setPhone(phone: string) {
        this.phone = phone;
    }
    
    public get getPhone(): string {
        return this.phone;
    }
}
