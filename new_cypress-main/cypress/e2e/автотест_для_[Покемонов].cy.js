describe('автотесты для сценария покупки аватара в покемонах', function () {

it('1. проверка покупки аватара', function () {
        cy.visit('https://pokemonbattle.ru'); // открой сайт 
    cy.get('.style_1_popup_white_in')
    cy.get('.style_1_popup_white_title').contains('Битва покемонов');    
    cy.get('#k_email').type('USER_LOGIN');
    cy.get('#k_password').type('USER_PASSWORD');
    cy.get('.MuiButton-root').should('be.visible'); 
    cy.get('.MuiButton-root').should('have.css', 'color', 'rgb(255, 255, 255)'); 
    cy.get('.MuiButton-root').click(); 
    cy.wait(2000);
 
    cy.get('.App');
    cy.get('.App').contains('Покемоны'); 
    cy.get('.header_card_trainer').click();
    cy.wait(3000);
    cy.get('.single_page_body_avatar_gradient');
    cy.get('.k_mobile > :nth-child(5)').click();
    cy.wait(3000);
    cy.get('.shop_page > .content');
    cy.get('.shop_page > .content').contains('Магазин');
    cy.get('.shop__list > .shop__item.available')
   
    cy.get('.shop__list > .shop__item.available')
      .then(($elements) => {
    const count = $elements.length;
    const randomIndex = Math.floor(Math.random() * count);
    const $randomElement = $elements.eq(randomIndex);
    cy.wrap($randomElement).find('.shop__button').click();

    cy.get('.payment_header')
    cy.get('.payment_header_content').contains('Пикачунькофф')
    cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5555 5555 5555 5599');
    cy.get(':nth-child(1) > .style_1_base_input').type('0129');
    cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
    cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('QA Studio Student');
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    cy.wait(3000);

    cy.get('.payment_page_content')
    cy.get('.payment_page_content').contains("Подтверждение покупки")
    cy.get('.style_1_base_input').type('56456');
    cy.wait(3000)
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()

    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').should('be.visible');
    cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
   
  });

 })
 }) // запуск сайпрес npx cypress open
