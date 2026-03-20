import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logo from "../../../imgs/logomaxxing.svg";
// Importa tus otras imágenes aquí
import SideImage1 from "../../../imgs/RegisterResourcers/atardecer.png";
import SideImage2 from "../../../imgs/HomeResources/feria.png";
import SideImage3 from "../../../imgs/HomeResources/bahia.png";

export default function Register() {
    const [step, setStep] = useState(1);
    const [type, setType] = useState("password");
    const [loading, setLoading] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const [isExiting, setIsExiting] = useState(false); // Estado para controlar la animación

    // --- CONFIGURACIÓN DEL SLIDER ---
    const sliderContent = [
        { img: SideImage1, quote: "Descubre lugares, explora sentimientos." },
        { img: SideImage2, quote: "La aventura comienza donde termina tu zona de confort." },
        { img: SideImage3, quote: "Colecciona momentos, no cosas." }
    ];

    // Nueva función para cambiar imagen con animación
    const handleImageChange = (direction) => {
        setIsExiting(true); // Empieza el desvanecimiento
        setTimeout(() => {
            if (direction === "next") {
                setCurrentImg((prev) => (prev === sliderContent.length - 1 ? 0 : prev + 1));
            } else {
                setCurrentImg((prev) => (prev === 0 ? sliderContent.length - 1 : prev - 1));
            }
            setIsExiting(false); // Termina el desvanecimiento (vuelve a aparecer)
        }, 300); // 300ms es el tiempo de la transición
    };

    const nextImg = () => handleImageChange("next");
    const prevImg = () => handleImageChange("prev");

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", username: "", email: "", password: "", passwordConfirm: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleType = () => setType(type === "password" ? "text" : "password");
    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("/api/auth/register", formData);
            toast.success("¡Cuenta creada!");
            navigate("/auth/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error al registrarse");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-3 py-2 bg-white/10 border border-white/20 outline-none rounded-xl placeholder-white/40 text-sm focus:border-white/40 transition-all font-light";

    return (
        <div className="bg-linear-to-br from-yellow-500 via-amber-600 to-orange-600 shadow-2xl shadow-zinc-950/70 max-w-2xl flex flex-col md:flex-row rounded-3xl overflow-hidden p-1 mx-auto animate-in fade-in duration-500 font-sans">
            
            {/* LADO IZQUIERDO: Slider de Imágenes */}
            <div className="hidden md:flex relative w-2/5 rounded-2xl overflow-hidden group">
                {/* Contenedor con transición de opacidad */}
                <div className={`w-full h-full transition-opacity duration-300 ease-in-out ${isExiting ? "opacity-0" : "opacity-100"}`}>
                    <img className="h-full w-full object-cover" 
                         src={sliderContent[currentImg].img} alt="Branding" />
                    
                    <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/70" />

                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-5">
                        <img src={Logo} alt="Logo" className="h-7 w-fit object-contain" />
                        <p className="text-white/80 text-xs leading-relaxed font-normal italic">
                            "{sliderContent[currentImg].quote}"
                        </p>
                    </div>
                </div>

                {/* Flechas del Slider */}
                <button type="button" onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1 bg-white/10 hover:bg-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaChevronLeft size={12} />
                </button>
                <button type="button" onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1 bg-white/10 hover:bg-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaChevronRight size={12} />
                </button>
            </div>

            {/* LADO DERECHO: Formulario Compacto */}
            <div className="w-full md:w-3/5 flex flex-col justify-center px-8 py-6 md:px-12">
                
                {/* Stepper más pequeño */}
                <div className="flex items-center justify-center gap-1.5 mb-4">
                    {[1, 2, 3].map((num) => (
                        <div key={num} className="flex items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] border transition-all ${
                                step === num ? "bg-white text-orange-600 border-white font-medium" : "border-white/20 text-white/30"
                            }`}>
                                {num}
                            </div>
                            {num < 3 && <div className={`w-6 h-[1px] ${step > num ? "bg-white/40" : "bg-white/10"}`} />}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleRegister} className="text-white flex flex-col gap-3">
                    <h3 className="text-2xl font-medium tracking-tight text-center md:text-left mb-1">
                        {step === 1 && "Crea tu cuenta"}
                        {step === 2 && "Seguridad"}
                        {step === 3 && "Finalizar"}
                    </h3>

                    <div className="flex flex-col justify-center gap-2">
                        {step === 1 && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-1 duration-300">
                                <div className="flex gap-2">
                                    <input name="firstName" type="text" placeholder="Nombre" className={inputClass} value={formData.firstName} onChange={handleChange} required />
                                    <input name="lastName" type="text" placeholder="Apellidos" className={inputClass} value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <input name="username" type="text" placeholder="Usuario" className={inputClass} value={formData.username} onChange={handleChange} required />
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-1 duration-300">
                                <input name="email" type="email" placeholder="Email" className={inputClass} value={formData.email} onChange={handleChange} required />
                                <div className="relative">
                                    <input name="password" type={type} placeholder="Contraseña" className={inputClass} value={formData.password} onChange={handleChange} required />
                                    <button type="button" onClick={handleType} className="absolute right-3 top-2.5 text-white/30 hover:text-white">
                                        {type === "password" ? <FaEye size={13}/> : <FaEyeSlash size={13}/>}
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center space-y-1 animate-in zoom-in-95 duration-300 bg-white/5 p-3 rounded-2xl border border-white/5">
                                <p className="text-[10px] text-white/60 font-light">Confirmar datos para:</p>
                                <p className="text-sm font-normal text-yellow-100">{formData.username || "Usuario"}</p>
                                <p className="text-[9px] text-white/40 italic">Haz clic en finalizar para empezar.</p>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2 mt-2">
                        {step > 1 && (
                            <button type="button" onClick={prevStep} className="flex-1 py-2 rounded-xl border border-white/10 text-[9px] font-medium tracking-widest hover:bg-white/5 transition-all uppercase">
                                Atrás
                            </button>
                        )}
                        
                        <button 
                            type="button" 
                            onClick={step < 3 ? nextStep : null} 
                            className="flex-[2] bg-zinc-950 py-2 rounded-xl text-[9px] font-bold tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-lg uppercase"
                        >
                            {step < 3 ? "Siguiente" : (loading ? "Cargando..." : "Finalizar")}
                        </button>
                    </div>

                    <p className="text-[9px] text-center text-white/30 mt-2 tracking-normal">
                        ¿Ya eres explorador? <Link to="/auth/login" className="text-white/60 hover:text-white transition-colors">Inicia sesión</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}