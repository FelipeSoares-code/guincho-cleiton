import whatsapp from '../assets/wpp.png'
import { Phone } from 'lucide-react'
import React from 'react';

export default function Popup22hr({ open, onClose }) {
  if (!open) return null;

  const handleWppClick = () => {
    gtag_report_conversion('https://wa.me/5511947168135');
  };

  const handlePhoneClick = () => {
    gtag_report_conversion('tel:+5511947168135');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="flex flex-col gap-2 p-4 bg-white border-2 border-red-600 rounded-md relative min-w-[320px] max-w-[90vw]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold text-xl hover:text-red-600"
          aria-label="Fechar popup"
        >
          ×
        </button>
        <h1 className="font-bold text-xl mb-2">AVISO</h1>
        <p>Prezados clientes,</p>
        <p>
          Nossa equipe solicita que, das 22 às 7 horas da manhã, o contato com nosso
          serviço seja realizado <strong>por ligação</strong> via WhatsApp ou telefone.
        </p>
        <p>Atenciosamente,</p>
        <p>Equipe CAS - Guincho Cleiton</p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button
            onClick={handleWppClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-full text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <img
              src={whatsapp}
              alt="whatsapp"
              className="h-8 w-12"
            />
            <span>Ligar por WhatsApp</span>
          </button>
          <button
            onClick={handlePhoneClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Phone className="h-5 w-5" />
            <span>Ligar por telefone</span>
          </button>
        </div>
      </div>
    </div>
  );
}
