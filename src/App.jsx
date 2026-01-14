import './App.css'

function App() {

  return (
    <>
      <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#fffff] to-[#E4FCE4] 
             md:bg-[url('/bg.png')] md:bg-no-repeat md:bg-right-bottom md:bg-contain">

  <header class="flex items-center px-6 md:px-20 pt-14">
    <img src="/naxix-digital.png" alt="Logo" class="h-16 w-auto mr-4" />
  </header>

  <main class="flex-1 relative flex items-center px-6 md:px-20">
    <div>
      <span class="text-[var(--color-secondary)] font-medium text-[25px] tracking-widest">STAY TUNED</span>
      <h1 class="text-4xl md:text-6xl font-bold text-black my-4 max-w-full md:max-w-[800px]">
        We’re almost ready to 
        <span class="gradient-animated"> unveil our website</span>
      </h1>
      <p class="text-black text-lg md:text-xl max-w-full md:max-w-[500px]">
        We’re crafting a digital experience that reflects what we do best — design, develop, and deliver impactful digital solutions.
      </p>
    </div>
  </main>

  <footer class="text-black px-6 md:px-20 pb-14">
    <p class="font-bold my-2">Have a project in mind?</p>
    <p>Drop us a message at:   
      <a href="mailto:naxixdigital@gmail.com" class="text-black hover:text-[var(--color-primary)] underline"> naxixdigital@gmail.com</a>
    </p>
  </footer>
</div>


    </>
  )
}

export default App


