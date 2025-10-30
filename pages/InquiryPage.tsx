import React, { useState, useEffect } from 'react';

const InquiryPage: React.FC = () => {
    const [inquiryType, setInquiryType] = useState('고객지원');
    const [captchaCode, setCaptchaCode] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    
    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
        setCaptchaCode(randomCode);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (captchaInput !== captchaCode) {
            alert('자동입력방지코드가 일치하지 않습니다.');
            generateCaptcha();
            setCaptchaInput('');
            return;
        }
        alert('문의가 접수되었습니다. 감사합니다.');
        // Here you would typically handle form submission
    };

    const inquiryOptions = ['고객지원', '렌탈문의', 'A/S신청', '파트너쉽'];

    return (
        <div className="pt-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold font-paperlogi text-slate-800">제품문의</h1>
                    <p className="mt-4 text-xl text-slate-600">휴로보틱스와 함께 스마트 솔루션을 설계하세요.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
                    <div>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {inquiryOptions.map(option => (
                                <label key={option} className="flex items-center cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input
                                            type="radio"
                                            name="inquiryType"
                                            value={option}
                                            checked={inquiryType === option}
                                            onChange={() => setInquiryType(option)}
                                            className="opacity-0 w-5 h-5"
                                        />
                                        <span className={`absolute left-0 w-5 h-5 rounded-full border-2 transition-colors duration-300 ${inquiryType === option ? 'border-blue-500' : 'border-gray-300'}`}></span>
                                        {inquiryType === option && <span className="absolute left-1.5 top-1.5 w-2 h-2 rounded-full bg-blue-500"></span>}
                                    </div>
                                    <span className="ml-3 text-slate-700">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">이름<span className="text-blue-500">*</span></label>
                        <input type="text" id="name" placeholder="성함을 입력해주세요." required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
                    </div>

                    <div>
                        <label htmlFor="contact" className="block text-sm font-bold text-slate-700 mb-2">연락처<span className="text-blue-500">*</span></label>
                        <input type="tel" id="contact" placeholder="'-'없이 입력해주세요. (예: 01012345678)" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-2">주소<span className="text-blue-500">*</span></label>
                        <input type="text" id="address" placeholder="업체 및 주소를 입력해주세요." required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">문의내용<span className="text-blue-500">*</span></label>
                        <textarea id="message" rows={6} placeholder="내용을 입력해주세요." required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">자동입력방지코드<span className="text-blue-500">*</span></label>
                        <div className="flex items-center gap-4">
                            <div className="bg-black text-white text-2xl font-bold tracking-widest w-48 h-12 flex items-center justify-center rounded-md font-sans">
                                {captchaCode}
                            </div>
                            <input
                                type="text"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                placeholder="자동입력방지 코드"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <input type="checkbox" id="privacy" required className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-900">
                            개인정보 보호정책에 따라 개인 데이터를 공유하는 데 동의합니다.
                            <a href="#" className="ml-2 underline text-sm text-gray-600 hover:text-gray-900">개인정보보호정책</a>
                        </label>
                    </div>

                    <div>
                        <button type="submit" className="w-full bg-blue-800 text-white font-bold py-4 px-4 rounded-md text-lg hover:bg-blue-900 transition-all duration-300 flex items-center justify-center gap-2">
                            문의하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InquiryPage;
