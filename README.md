# 📱 MyNihonApp 🇯🇵

**MyNihonApp** es una aplicación educativa gratuita para aprender japonés, inspirada en plataformas como *Duolingo* y *Quizlet*, con integración a Firebase y soporte para roles de usuarios como estudiantes y maestros. Actualmente en desarrollo con React Native + Expo.

---

## 🚀 Características

- Registro e inicio de sesión con Firebase Authentication
- Gestión de usuarios y roles (estudiante / maestro)
- Navegación dinámica según el rol
- Integración con Firestore para almacenar datos del usuario
- Compatible con dispositivos móviles (Expo Go) y Web

---

## 📦 Tecnologías

- [React Native](https://reactnative.dev/)
- [Expo SDK 53](https://docs.expo.dev/)
- [Firebase (Auth + Firestore)](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🔧 Instalación

1. Clona el repositorio:

git clone https://github.com/CarlosEd1702/myNihonApp.git
cd myNihonApp

2. Instala las dependencias:

npm install

3. Crea un archivo .env basado en el .env.example:

cp .env.example .env

4. Ejecuta el proyecto:

npx expo start
Luego escanea el QR con Expo Go o usa w, a, i para lanzar en web, Android o iOS.
