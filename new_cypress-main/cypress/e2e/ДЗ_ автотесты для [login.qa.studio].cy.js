describe('автотесты для формы логина и пароля на [login.qa.studio]', function () {

it('1. проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // открой сайт 
        
        cy.get('#mail').type('german@dolnikov.ru'); // найди поле эмаил.введи значение ( ".....") 
        cy.get('#pass').type('iLoveqastudio1');// найди на странице поле ввода Пароль.введи значение ("....")
        cy.get('#loginButton').click(); // найди кнопку "войти".и кликни на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверить вывод именно определенного текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопк крестик есть и видна пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form')
        cy.get('#form > .header').contains('Форма логина');
        })


it('2.проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#forgotEmailButton').should('be.visible'); 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); 
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#forgotEmailButton').click(); 
        
        cy.get('#forgotForm')
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();

        cy.get('#message')
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#form')
        cy.get('#form > .header').contains('Форма логина');
         })
    
it('3.проверка на негативный кейс авторизации(Неправильный пароль)', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('german@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click(); 
        cy.get('#message')
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form')
        cy.get('#form > .header').contains('Форма логина');
        })

it('4.проверка на негативный кейс авторизации(Неправильный логин)', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('gerrman@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); 
        cy.get('#message')
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form')
        cy.get('#form > .header').contains('Форма логина');
        })

it('5.проверка на негативный кейс валидации)', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('germandolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); 
        cy.get('#message')
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
        })

it('6.проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form')
        cy.get('#form > .header').contains('Форма логина');
        })



        })
