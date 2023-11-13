import auth from '@react-native-firebase/auth'

export const handleCreated = (mail: string, password: string,): void => {

    if (!mail || !password) {
        console.log("Email veya şifre boş geçilemez!")
        return;
    }
    auth().createUserWithEmailAndPassword(mail, password)
        .then(() => {
            console.log("Kaydınız Başarıyla oluşturuldu.")
            auth().signOut()
        })
        .catch((err: any) => {
            console.log(err.code)
        });
}

export const handleLogin = (mail: string, password: string): void => {

    if (!mail || !password) {
        console.log("Email veya şifre boş geçilemez!")
        return;
    }
    auth().signInWithEmailAndPassword(mail, password)
        .then(() => {
            console.log("Başarıyla Giriş Yapıldı!")
        })
        .catch((err: any) => {
            console.log(err)
        })
}

export const handleSignOut = (): void => {
    auth()
        .signOut()
        .then(() => console.log("Başarıyla Çıkış Yapıldı!"))
}