import './App.css'
import { Phone, Clock, MapPin, Shield, Star, Truck, Users, Receipt } from 'lucide-react'
import logoFull from './assets/logo-full.png'
import guincho1 from './assets/guincho1.png'
import guincho2 from './assets/guincho2.png'
import guincho3 from './assets/guincho3.png'
import guincho4 from './assets/guincho4.png'
import guinchoEscolar from './assets/guincho-escolar.png'
import guinchoBaixo from './assets/guincho-baixo.png'
import whatsapp from './assets/wpp.png'
import Popup22hr from './components/Popup22hr'
import React from 'react';

function App() {
  const handleWppClick = () => {
    const now = new Date();
    if (now.getHours() >= 22 || now.getHours() < 7) {
      setPopupOpen(true);
    } else {
      gtag_report_conversion('https://wa.me/5511947168135');
    }
  }
  const handlePhoneClick = () => {
    const now = new Date();
    if (now.getHours() >= 22 || now.getHours() < 7) {
      setPopupOpen(true);
    } else {
      gtag_report_conversion('tel:+5511947168135');
    }
  }

  const [popupOpen, setPopupOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Popup22hr className="" open={popupOpen} onClose={() => setPopupOpen(false)} />
      {/* Header com botão de ligação */}
      <header className="text-white py-4 px-4 sticky top-0 z-50 shadow-lg" style={{ backgroundColor: '#aa1707', width: '100%' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logoFull} alt="logo completo" className="w-26 block sm:w-39" />
          </div>
          <button 
            onClick={handleWppClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
          >
            <img src={whatsapp}
              alt="whatsapp"
              className="h-8 w-12" 
            />
            <span className="text-sm md:text-base">CHAME AGORA!</span>
          </button>
        </div>
      </header>

      <section className="relative h-130 flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${guincho2})` }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Guincho 24 Horas
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Atendimento rápido e confiável em São Bernardo do Campo, Imigrantes, ABC e região
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleWppClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <img src= { whatsapp }
                alt="whatsapp"
                className="h-8 w-12" 
              />
              <span>Chamar Guincho</span>
            </button>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">24h por dia, 7 dias por semana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Truck className="h-12 w-12 text-red-600 mb-4 mx-auto" />
              <h4 className="text-xl font-bold mb-3 text-gray-800">Guinchos Leves e Médios</h4>
              <p className="text-gray-600">Veículos de passeio, SUV, Motos, Utilitários, Blindados, HR e Bongo</p>
            </div> 
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Receipt className="h-12 w-12 text-red-600 mb-4 mx-auto" />
              <h4 className="text-xl font-bold mb-3 text-gray-800">Nota Fiscal Para Reembolso</h4>
              <p className="text-gray-600">Atendimentos a segurados com nota fiscal pra reembolso da seguradora</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Atendemos São Bernardo do Campo e Região
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">São Bernardo do Campo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">Santo André</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">São Caetano do Sul</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">Diadema</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">Rodovia Imgrantes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">Rodovia Anchieta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">Rodoanel</span>
                </div>
              </div>
              <div className="mt-8">
                <button 
                  onClick={handleWppClick}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>Solicitar Atendimento</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={guincho1} 
                alt="Guincho em ação" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <img src={guincho3} alt="Guincho na levando carro azul" className="rounded-lg shadow-xl w-full h-auto"/>
          <img src={guinchoEscolar} alt="Guincho levando van Escolar" className="rounded-lg shadow-xl w-full h-auto"/>
          <img src={guinchoBaixo} alt="Guincho com rampa baixa" className="rounded-lg shadow-xl w-full h-auto"/>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que escolher nosso serviço?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-bold mb-2">24 Horas</h4>
              <p>Atendimento 24h, todos os dias da semana</p>
            </div>
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-bold mb-2">Segurança</h4>
              <p>Equipamentos modernos e profissionais qualificados</p>
            </div>
            <div className="text-center">
              <Star className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-bold mb-2">Qualidade</h4>
              <p>Atendimento de excelência com preços justos</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-bold mb-2">Experiência</h4>
              <p>Anos de experiência no mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de um guincho agora?
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Não perca tempo! Entre em contato conosco e tenha atendimento rápido e confiável.
          </p>
          <button 
            onClick={handlePhoneClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl flex items-center space-x-3 mx-auto transition-all duration-300 transform hover:scale-105 shadow-xl animate-bounce"
          >
            <Phone className="h-7 w-7" />
            <span>LIGUE AGORA:<br></br>(11) 94716-8135</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Truck className="h-6 w-6" />
            <span className="text-lg font-bold">CAS - Cleiton Guincho 24h</span>
          </div>
          <p className="text-gray-400 mb-2">
            Atendimento em São Bernardo do Campo e região
          </p>
          <p className="text-gray-400">
            © 2024 CAS - Cleiton Guincho. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
