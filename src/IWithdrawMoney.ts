export default interface IWithdrawMoney {
    limitWithdrawMoney: number;
    withdrawMoney(money: number): boolean;
}
