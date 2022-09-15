function hitungVoucher(voucher, uang) {
    let diskonBerkah = 25/100
    let diskonMurah = 50/100
    let belanja = uang
    let hasilDiskonBerkah =  belanja * diskonBerkah
    let hasilDiskonMurah = belanja * diskonMurah


    if(voucher == "DumbWMerchBerkah") {
        let result = belanja - hasilDiskonBerkah
            if(hasilDiskonBerkah >= 20000) {
                hasilDiskonBerkah = 20000
                result = belanja - hasilDiskon
            }

            if(belanja <= 50000) {
            hasilDiskonBerkah = 0
            console.log("Total Belanja : Rp. ", belanja)
            console.log("Diskon : 0%")
            console.log("Potongan : Rp.", hasilDiskonBerkah)
            console.log("Total Pembayaran : Rp. ", belanja)
            return;
            }
            console.log("Total Belanja : Rp.", belanja)
            console.log("Diskon : 25%")
            console.log("Potongan : Rp.", hasilDiskonBerkah)
            console.log("Total Pembayaran : Rp. ", result)
            return;
    
    }else if(voucher == "DumbMerchMurahBanget") {
        let result = belanja - hasilDiskonMurah
            if(hasilDiskonMurah >= 45000) {
                hasilDiskonMurah = 45000
                result = belanja - hasilDiskonMurah
            }

            if(belanja <= 70000) {
                hasilDiskonMurah = 0
                console.log("Total Belanja : Rp. ", belanja)
                console.log("Diskon : 0%")
                console.log("Potongan : Rp.", hasilDiskonMurah)
                console.log("Total Pembayaran : Rp. ", belanja)
                return;
             }
                console.log("Total Belanja : Rp.", belanja)
                console.log("Diskon : 50%")
                console.log("Potongan : Rp.", hasilDiskonMurah)
                console.log("Total Pembayaran : Rp. ", result)
                return;
    }
}

hitungVoucher("DumbMerchMurahBanget", 75000)

