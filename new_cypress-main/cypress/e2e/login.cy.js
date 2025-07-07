describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // открой сайт 
        cy.get('#forgotEmailButton').should('be.visible'); // Проверить что кнопка "Забыли пароль " видна пользователю
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //  Проверить что кнопка "Забыли пароль "  именно такого цвета
        cy.get('#mail').type('german@dolnikov.ru'); // найди поле эмаил.введи значение ( ".....") 
        cy.get('#pass').type('iLoveqastudio1');// найди на странице поле ввода Пароль.введи значение ("....")
        cy.get('#loginButton').click(); // найди кнопку "войти".и кликни на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяет имменно значение Текста
        cy.get('messageHeader').should('be.visible');

        })
})


// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
// запуск сайпрес npx cypress open