import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Star, StarHalf, Search, Sparkles, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Pastel Petal Earrings',
    price: 24.99,
    category: 'Earrings',
    img: 'https://images.unsplash.com/photo-1617038260897-3ed8230f2e97?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Blush Bangle Set',
    price: 29.99,
    category: 'Bangles',
    img: 'https://images.unsplash.com/photo-1603565816278-8e4d792b32a6?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Sky Charm Bracelet',
    price: 19.99,
    category: 'Bracelets',
    img: 'https://images.unsplash.com/photo-1617038260931-20e5be2e7053?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Lilac Hoop Earrings',
    price: 22.0,
    category: 'Earrings',
    img: 'https://images.unsplash.com/photo-1630161630882-1ed3b82b310c?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
  },
]

const categories = [
  {
    key: 'earrings',
    title: 'Earrings',
    color: 'from-pink-100 to-pink-50',
    text: 'text-pink-600',
    img: 'https://images.unsplash.com/photo-1606914469536-0922fb873d0d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    key: 'bangles',
    title: 'Bangles',
    color: 'from-purple-100 to-purple-50',
    text: 'text-purple-600',
    img: 'https://images.unsplash.com/photo-1605100804763-5c1b3f4d2a2c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    key: 'bracelets',
    title: 'Bracelets',
    color: 'from-sky-100 to-blue-50',
    text: 'text-sky-600',
    img: 'https://images.unsplash.com/photo-1611078489935-df2c1bb0f5bb?q=80&w=1400&auto=format&fit=crop',
  },
]

const reviews = [
  {
    name: 'Ayesha',
    text: 'Absolutely adore the designs! Super cute and perfect for everyday glam.',
    rating: 5,
  },
  {
    name: 'Mia',
    text: 'The bangles are gorgeous and the colors are dreamy. Great quality!',
    rating: 5,
  },
  {
    name: 'Zara',
    text: 'Minimal, trendy, and the packaging is adorable. Love this brand!',
    rating: 4.5,
  },
]

function Stars({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className="flex items-center text-yellow-500">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-yellow-400" />}
    </div>
  )
}

function App() {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (id) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-sky-50 text-slate-800">
      {/* Top bar */}
      <div className="sticky top-0 z-30 backdrop-blur border-b border-pink-100/70 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-pink-500" />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Sparkle & Bloom</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#new" className="text-fuchsia-600 hover:text-fuchsia-700">New Arrivals</a>
            <a href="#earrings" className="hover:text-pink-600">Earrings</a>
            <a href="#bangles" className="hover:text-pink-600">Bangles</a>
            <a href="#bracelets" className="hover:text-pink-600">Bracelets</a>
            <a href="#reviews" className="hover:text-pink-600">Reviews</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input placeholder="Search jewelry" className="pl-9 pr-3 py-2 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-200 text-sm" />
            </div>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold shadow hover:shadow-md">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Bright. Elegant. Trendy.
              <span className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">Accessories that sparkle</span>
            </motion.h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              Pastel-perfect earrings, bangles, and bracelets crafted for a youthful, stylish vibe. Minimal design with a playful touch.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#new" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow hover:shadow-md">
                <Sparkles className="h-5 w-5" /> New Arrivals
              </a>
              <a href="#categories" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-pink-600 border border-pink-200 hover:bg-pink-50 font-semibold">
                Shop Now <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-pink-100">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop" alt="Model wearing pastel jewelry" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/70 backdrop-blur rounded-2xl p-4 shadow-lg border border-pink-100">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-400" />
                <p className="text-sm font-medium">Rated 4.8 by 2k+ customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2>
            <a href="#new" className="text-pink-600 text-sm font-semibold hover:underline">New Arrivals</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <a key={c.key} href={`#${c.key}`} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.color} p-4 ring-1 ring-white/60`}> 
                <div className="absolute inset-0">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="relative z-10 flex items-end h-40">
                  <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow border border-white/70">
                    <span className={`text-sm font-semibold ${c.text}`}>{c.title}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals / Products */}
      <section id="new" className="py-12 sm:py-16 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold">New Arrivals</h2>
            <a href="#" className="text-slate-600 text-sm hover:underline">View all</a>
          </div>
          <div className="mt-6 grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md ring-1 ring-pink-100">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <button onClick={() => toggleWishlist(p.id)} className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur shadow hover:scale-105 transition">
                    <Heart className={`h-5 w-5 ${wishlist.includes(p.id) ? 'fill-pink-500 text-pink-500' : 'text-pink-500'}`} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-pink-600 font-semibold">{p.category}</p>
                    <Stars value={p.rating} />
                  </div>
                  <h3 className="mt-1 font-semibold">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-lg font-bold">${p.price.toFixed(2)}</p>
                    <button className="text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow hover:shadow-md">Add to cart</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">What our customers say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-pink-100">
                <Stars value={r.rating} />
                <p className="mt-3 text-slate-600">“{r.text}”</p>
                <p className="mt-4 font-semibold">— {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-100/70 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Sparkle & Bloom. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-slate-600 hover:text-pink-600">Privacy</a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a href="#" className="text-sm text-slate-600 hover:text-pink-600">Terms</a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a href="#" className="text-sm text-slate-600 hover:text-pink-600">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
