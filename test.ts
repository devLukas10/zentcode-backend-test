import  {TronWeb, Trx} from 'tronweb';
import fs from 'fs';


const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io'
    //headers: { 'TRON-PRO-API-KEY': '668a7828-623e-479d-bf26-8b1a74e19db4' },
    //privateKey: 'your private key'
});
// create testnet wallet
async function createWallet() {
    try{
        const account = await tronWeb.createAccount();
        const datas = [];
        datas.push({Endereço: account.address.base58});
        datas.push({publicKey: account.publicKey});
        datas.push({privateKey: account.privateKey});

        fs.writeFileSync('./data2.json', JSON.stringify(datas))
    }
    catch (err){ console.log(err)}
}
//

async function getBalance(address: any) {
    try{
        const account =  await tronWeb.trx.getBalance(address);
        const balanceInTrx = tronWeb.fromSun(account);
        console.log(`Saldo: ${balanceInTrx} TRX`);
    }
    catch (err){console.log(err)}
}
//

async function asignSend (amount: number, to: string){
    const amounts = tronWeb.toSun(amount);
    try {
        const tx = await tronWeb.trx.sendTransaction(to, amount, {
            privateKey: "5031FEEE5AAD8D5686FC28FF1F02A2D9B2E9A0497AA5530708A0F85A0D6F903F",
            address: "THKcm2UBz3W5EfkrydD3RVTM1jHzyN11xj",
        });
        console.log('Transação enviada:', tx);
    } catch (error) {
        console.error('Erro ao transferir TRX:', error);
    }
}

getBalance("TVTb8ZgMgnQfgfy6vd4foNUPM2EdNyZhQW")
getBalance("THKcm2UBz3W5EfkrydD3RVTM1jHzyN11xj")
//createWallet()
//asignSend(100, 'TVTb8ZgMgnQfgfy6vd4foNUPM2EdNyZhQW')