
function App() {
    const [activeTab, setActiveTab] = React.useState('dashboard');
    const [messages, setMessages] = React.useState([
        { role: 'ai', text: 'Hello Mannan! Welcome to Nexora Ultimate AI Platform, engineered in partnership with Unsa. How can I help you conquer your JKBOSE/CBSE studies today?' }
    ]);
    const [inputQuery, setInputQuery] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);
    const [showAbout, setShowAbout] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [selectedClass, setSelectedClass] = React.useState('Class 9');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputQuery.trim()) return;

        const userText = inputQuery;
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInputQuery('');
        setIsTyping(true);

        setTimeout(() => {
            let aiReply = "That's a brilliant question! Under your JKBOSE/CBSE curriculum for " + selectedClass + ", make sure you understand the core conceptual derivations, formulas, and structured definitions.";
            const lower = userText.toLowerCase();
            if (lower.includes('motion') || lower.includes('physics')) {
                aiReply = "For Class 9 Physics Motion: Remember the equations v = u + at, s = ut + ½at², and v² = u² + 2as. Always verify your SI units!";
            } else if (lower.includes('cell') || lower.includes('biology')) {
                aiReply = "The cell is the basic structural and functional unit of life. Key organelles include mitochondria (powerhouse), nucleus (control center), and ribosomes (protein synthesis).";
            } else if (lower.includes('unsa') || lower.includes('mannan')) {
                aiReply = "Nexora is proudly engineered by Mohammad Mannan Mir in collaboration with Unsa for absolute academic excellence across District Budgam and beyond!";
            }
            setMessages(prev => [...prev, { role: 'ai', text: aiReply }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <header className="bg-slate-900/90 border-b border-slate-800 sticky top-0 z-50 px-4 py-3 flex justify-between items-center backdrop-blur-md">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
                    <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2.5 rounded-2xl text-white font-bold shadow-lg shadow-indigo-600/30">
                        <i className="fa-solid fa-brain text-lg"></i>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">NEXORA AI</h1>
                        <p className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">Ultimate Smart Learning Ecosystem</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="bg-slate-800 text-slate-200 border border-slate-700 text-xs px-2.5 py-1.5 rounded-xl font-medium focus:outline-none">
                        <option>Class 8</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                    </select>
                    <button onClick={() => setActiveTab('ai')} className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-indigo-600/30 transition flex items-center space-x-1.5">
                        <i className="fa-solid fa-robot"></i><span>AI Tutor</span>
                    </button>
                    <button onClick={() => setShowAbout(true)} className="text-slate-400 hover:text-white p-2">
                        <i className="fa-solid fa-circle-info text-lg"></i>
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 max-w-4xl w-full mx-auto p-4 space-y-6">
                {activeTab === 'dashboard' && (
                    <div className="space-y-6 animate-fadeIn">
                        {/* Hero Welcome Card */}
                        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 space-y-3">
                                <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">JKBOSE & CBSE Elite Hub ({selectedClass})</span>
                                <h2 className="text-2xl md:text-3xl font-black text-white">Welcome back, Mannan! 🚀</h2>
                                <p className="text-slate-300 text-sm max-w-xl">Your high-performance AI learning engine is fully calibrated in collaboration with Unsa. Ask doubts, read topper notes, or test your mastery instantly.</p>
                                <div className="pt-2 flex flex-wrap gap-3">
                                    <button onClick={() => setActiveTab('ai')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-600/40 flex items-center space-x-2">
                                        <i className="fa-solid fa-comments"></i><span>Launch AI Tutor</span>
                                    </button>
                                    <button onClick={() => setActiveTab('notes')} className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2">
                                        <i className="fa-solid fa-book-open"></i><span>Explore Notes</span>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -right-8 -bottom-8 text-indigo-900/20 text-9xl font-black pointer-events-none">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div onClick={() => setActiveTab('ai')} className="glass-card p-4 rounded-2xl hover:border-indigo-500 transition cursor-pointer text-center group">
                                <div className="w-12 h-12 mx-auto bg-indigo-600/10 text-indigo-400 rounded-2xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition shadow-inner">
                                    <i className="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <h3 className="font-bold text-sm text-white">AI Teacher</h3>
                                <p className="text-[11px] text-slate-400 mt-0.5">24/7 Unlimited Solver</p>
                            </div>
                            <div onClick={() => setActiveTab('notes')} className="glass-card p-4 rounded-2xl hover:border-emerald-500 transition cursor-pointer text-center group">
                                <div className="w-12 h-12 mx-auto bg-emerald-600/10 text-emerald-400 rounded-2xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition shadow-inner">
                                    <i className="fa-solid fa-file-lines"></i>
                                </div>
                                <h3 className="font-bold text-sm text-white">Topper Notes</h3>
                                <p className="text-[11px] text-slate-400 mt-0.5">Curated Summaries</p>
                            </div>
                            <div onClick={() => setActiveTab('quiz')} className="glass-card p-4 rounded-2xl hover:border-amber-500 transition cursor-pointer text-center group">
                                <div className="w-12 h-12 mx-auto bg-amber-600/10 text-amber-400 rounded-2xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition shadow-inner">
                                    <i className="fa-solid fa-award"></i>
                                </div>
                                <h3 className="font-bold text-sm text-white">Live Quiz</h3>
                                <p className="text-[11px] text-slate-400 mt-0.5">Test & Score</p>
                            </div>
                            <div onClick={() => setActiveTab('collab')} className="glass-card p-4 rounded-2xl hover:border-purple-500 transition cursor-pointer text-center group">
                                <div className="w-12 h-12 mx-auto bg-purple-600/10 text-purple-400 rounded-2xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition shadow-inner">
                                    <i className="fa-solid fa-shield-heart"></i>
                                </div>
                                <h3 className="font-bold text-sm text-white">Collab Hub</h3>
                                <p className="text-[11px] text-slate-400 mt-0.5">Mannan & Unsa</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'ai' && (
                    <div className="glass-card rounded-3xl p-4 flex flex-col h-[72vh] shadow-2xl animate-fadeIn">
                        <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                            <div>
                                <h3 className="font-extrabold text-white text-sm flex items-center"><i className="fa-solid fa-robot text-indigo-400 mr-2"></i>Nexora Advanced AI Tutor ({selectedClass})</h3>
                                <p className="text-[11px] text-slate-400">Trained on JKBOSE/CBSE syllabus & worldwide knowledge</p>
                            </div>
                            <button onClick={() => setMessages([{ role: 'ai', text: 'Chat reset. What would you like to study now?' }])} className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-lg font-medium">Clear</button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
                            {messages.map((m, idx) => (
                                <div key={idx} className={`flex items-start space-x-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                                    {m.role === 'ai' && <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md">AI</div>}
                                    <div className={`p-3.5 rounded-2xl text-xs md:text-sm max-w-[82%] leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none shadow-lg shadow-indigo-600/20' : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'}`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">AI</div>
                                    <div className="bg-slate-900 border border-slate-800 text-slate-400 p-3 rounded-2xl text-xs animate-pulse">Thinking & generating best response...</div>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-800 flex items-center space-x-2">
                            <input type="text" value={inputQuery} onChange={(e) => setInputQuery(e.target.value)} placeholder="Ask any question (Maths, Science, GK, etc.)..." className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs md:text-sm text-slate-100 focus:outline-none focus:border-indigo-500 shadow-inner" />
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-2xl text-xs font-bold transition shadow-lg shadow-indigo-600/30">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'notes' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center">
                            <h3 className="font-extrabold text-base text-white">Curated Topper Study Notes</h3>
                            <span className="text-[11px] bg-indigo-900/50 text-indigo-300 border border-indigo-700/50 px-3 py-1 rounded-full font-semibold">{selectedClass} JKBOSE / CBSE</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="glass-card p-4 rounded-2xl space-y-2">
                                <h4 className="font-bold text-indigo-400 text-sm flex items-center"><i className="fa-solid fa-atom mr-2"></i>Physics: Motion</h4>
                                <p className="text-xs text-slate-400">Complete graphical analysis, speed-time relations, and derivation of all 3 equations of motion.</p>
                                <button onClick={() => alert('Loading Physics Chapter Summary...')} className="text-xs bg-slate-800 hover:bg-slate-700 text-indigo-300 px-3 py-1.5 rounded-xl font-semibold">Read Notes</button>
                            </div>
                            <div className="glass-card p-4 rounded-2xl space-y-2">
                                <h4 className="font-bold text-emerald-400 text-sm flex items-center"><i className="fa-solid fa-dna mr-2"></i>Biology: Fundamental Unit of Life</h4>
                                <p className="text-xs text-slate-400">Detailed breakdown of plant & animal cells, plasma membrane, nucleus, and cytoplasmic organelles.</p>
                                <button onClick={() => alert('Loading Biology Chapter Summary...')} className="text-xs bg-slate-800 hover:bg-slate-700 text-emerald-300 px-3 py-1.5 rounded-xl font-semibold">Read Notes</button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'quiz' && (
                    <div className="glass-card p-6 rounded-3xl text-center space-y-4 animate-fadeIn">
                        <h3 className="font-extrabold text-lg text-white">Interactive Science Practice Portal</h3>
                        <p className="text-xs text-slate-400 max-w-md mx-auto">Test your knowledge with instant evaluation designed for {selectedClass} toppers.</p>
                        <button onClick={() => alert('Initializing Live Quiz Session...')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-lg shadow-indigo-600/30">Start Quiz Now</button>
                    </div>
                )}

                {activeTab === 'collab' && (
                    <div className="glass-card p-6 rounded-3xl space-y-4 animate-fadeIn">
                        <h3 className="font-extrabold text-lg text-white flex items-center"><i className="fa-solid fa-shield-heart text-purple-400 mr-2"></i>Student Collaboration & Partner Hub</h3>
                        <p className="text-xs text-slate-400">Dedicated workspace connecting Mannan and Unsa for shared academic resources and joint projects.</p>
                        <div className="p-4 bg-purple-950/30 border border-purple-800/40 rounded-2xl text-xs text-purple-200 space-y-1">
                            <p className="font-bold">✨ Active Partnership Project: Nexora Smart AI Learning System v4.0</p>
                            <p className="text-[11px] text-purple-300">Synchronized across secure nodes in District Budgam, JK.</p>
                        </div>
                    </div>
                )}

                {isAdmin && (
                    <div className="glass-card p-6 rounded-3xl border-red-500/40 space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <h3 className="font-extrabold text-red-400 text-base flex items-center"><i className="fa-solid fa-shield-halved mr-2"></i>Secure Admin Control Panel</h3>
                            <span className="text-[10px] bg-red-950 text-red-400 border border-red-800 px-2.5 py-1 rounded-full font-mono font-bold">ROOT ACCESS</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                                <p className="text-[10px] text-slate-400">Active Nodes</p>
                                <h4 className="text-base font-black text-white mt-1">3,480</h4>
                            </div>
                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                                <p className="text-[10px] text-slate-400">AI Queries</p>
                                <h4 className="text-base font-black text-white mt-1">42,940</h4>
                            </div>
                            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                                <p className="text-[10px] text-slate-400">Status</p>
                                <h4 className="text-base font-black text-emerald-400 mt-1">Online</h4>
                            </div>
                        </div>
                        <button onClick={() => setIsAdmin(false)} className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2 rounded-xl text-xs font-bold">Exit Admin Mode</button>
                    </div>
                )}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 py-2.5 px-6 flex justify-around items-center z-40 backdrop-blur-md">
                <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center text-[11px] space-y-1 transition ${activeTab === 'dashboard' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>
                    <i className="fa-solid fa-house text-base"></i><span>Home</span>
                </button>
                <button onClick={() => setActiveTab('ai')} className={`flex flex-col items-center text-[11px] space-y-1 transition ${activeTab === 'ai' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>
                    <i className="fa-solid fa-robot text-base"></i><span>AI Tutor</span>
                </button>
                <button onClick={() => setActiveTab('notes')} className={`flex flex-col items-center text-[11px] space-y-1 transition ${activeTab === 'notes' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>
                    <i className="fa-solid fa-book text-base"></i><span>Notes</span>
                </button>
                <button onClick={() => setActiveTab('quiz')} className={`flex flex-col items-center text-[11px] space-y-1 transition ${activeTab === 'quiz' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>
                    <i className="fa-solid fa-award text-base"></i><span>Quiz</span>
                </button>
                <button onClick={() => setActiveTab('collab')} className={`flex flex-col items-center text-[11px] space-y-1 transition ${activeTab === 'collab' ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-200'}`}>
                    <i className="fa-solid fa-shield-heart text-base"></i><span>Collab</span>
                </button>
            </nav>

            {/* About Modal */}
            {showAbout && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="glass-card rounded-3xl max-w-sm w-full p-6 space-y-4 border border-indigo-500/30">
                        <div className="text-center space-y-1.5">
                            <div className="w-14 h-14 bg-indigo-600/20 text-indigo-400 rounded-2xl mx-auto flex items-center justify-center text-xl font-extrabold border border-indigo-500/30">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <h3 className="font-extrabold text-base text-white">NEXORA AI Ecosystem</h3>
                            <p className="text-[11px] text-slate-400">Smart AI Learning & Student Platform</p>
                        </div>
                        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2 text-xs">
                            <div className="flex justify-between"><span className="text-slate-400">Lead Developer:</span> <span className="font-bold text-white">Mohammad Mannan Mir</span></div>
                            <div className="flex justify-between"><span className="text-slate-400">Partner:</span> <span className="font-bold text-indigo-300">Unsa</span></div>
                            <div className="flex justify-between"><span className="text-slate-400">Curriculum:</span> <span className="font-bold text-white">JKBOSE / CBSE</span></div>
                            <div className="flex justify-between"><span className="text-slate-400">Version:</span> <span className="font-bold text-emerald-400">4.0 Ultimate Pro</span></div>
                        </div>
                        <div className="flex space-x-2 pt-1">
                            <button onClick={() => setShowAbout(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl text-xs font-bold">Close</button>
                            <button onClick={() => { setShowAbout(false); setIsAdmin(true); }} className="flex-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 py-2.5 rounded-xl text-xs font-bold">Admin Mode</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
