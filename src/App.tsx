import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner';
import { ThemeProvider } from '@/components/theme-provider';
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const Blog = lazy(() => import('./pages/Blog'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Publish = lazy(() => import('./pages/Publish'));
const Edit = lazy(() => import('./pages/Edit'));
const User = lazy(() => import('./pages/User'));
const Error = lazy(() => import('./pages/404'));
function App() {
  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="w-screen h-screen flex justify-center items-center">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/publish" element={<Publish />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/profile/:id" element={<User />} />
              <Route path="*" element={<Error />} />
              <Route path="/" element={<Blogs />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
