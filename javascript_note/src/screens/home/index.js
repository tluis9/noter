import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/noter_3.png';
import PresentationImage2 from '../../assets/images/noter_1.png';
import PresentationImage3 from '../../assets/images/noter_4.png';
import PresentationImage4 from '../../assets/images/noter_2.png';
import Header from "../../components/header";
import { Column, Section, Title, Container } from "rbx";
import "../../styles/home.scss";
import { Link } from 'react-router-dom';


const HomeScreen = () => (
        <Fragment>
            <Header />
      
            <Section size="medium" className="home-top">
              <Container>
      
                  <Column size={12}>
                  <Title size={1} spaced className="has-text-white">
                    Suas notas onde você estiver
                  </Title>
                  <Title size={5} spaced className="has-text-light" subtitle>
                      Você nunca sabe quando uma boa ideia vai vir! Agora, você sabe onde anotar!<br/><br/>
                  </Title>
                  <Link to='/register' className="button is-outlined is-white is-large">
                      <strong>Registre-se grátis no Noter!</strong>
                  </Link>
                  </Column>
                  
                  <Column size={12} className="img-principal">
                      <img src={PresentationImage} />
                  </Column>
      
              </Container>
             </Section>
      
      
            <Section size="medium" className="second-section">
              <Container>
                  <Column.Group>
                  
                      <Column size={5} className="section-title">
                        <Title size={3} spaced className="has-text-white">
                            A qualquer hora, em qualquer lugar!
                        </Title>
                        <Title size={6} spaced className="has-text-light" subtitle>
                            O Noter deixa suas notas salvas e guardadas, e onde e quando quiser você pode editá-las, excluí-las ou atualizá-las!    
                        </Title>
                      </Column>
                      
                      <Column size={6} className="img-secondary">
                          <img src={PresentationImage2} />
                      </Column>
                  </Column.Group>
              </Container>
             </Section>

             <Section size="medium" className="third-section">
              <Container>
                  <Column.Group>
                  
                      <Column size={6} className="img-third">
                          <img src={PresentationImage3} />
                      </Column>
                      
                      <Column size={5} className="section-title">
                        <Title size={3} spaced className="has-text-white">
                            Diversas opções de edição
                        </Title>
                        <Title size={6} spaced className="has-text-light" subtitle>
                            Com o nosso editor incrível, você deixa seu texto do jeito que quiser, personalizado da maneira que você preferir e de acordo com a sua criatividade.    
                        </Title>
                      </Column>
                      
                  </Column.Group>
              </Container>
             </Section>

             <Section size="medium" className="fourth-section">
              <Container>
                  <Column.Group>
                  
                      <Column size={5} className="section-title">
                      <Title size={3} spaced className="has-text-white">
                          Salvamento automático
                      </Title>
                      <Title size={6} spaced className="has-text-light" subtitle>
                        Não se preocupe caso a internet caia e você não consiga salvar sua nota! O Noter salva sua nota depois de 3 segundos de inatividade para sua segurança!    
                      </Title>
                      </Column>
                      
                      <Column size={6} className="img-fourth">
                          <img src={PresentationImage4} />
                      </Column>
                  </Column.Group>
              </Container>
             </Section>

             <Section size="medium" className="footer">
              <Container>
                  <Column.Group>
                  
                      <Column size={12}>
                        <Title size={5} spaced className="has-text-white footer-title">
                            © Copyright - Desenvolvido por Tércio Luís 
                        </Title>
                      </Column>

                  </Column.Group>
              </Container>
             </Section>
      
        </Fragment>
)
 
export default HomeScreen;