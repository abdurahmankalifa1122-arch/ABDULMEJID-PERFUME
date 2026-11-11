import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ABDULMEJID PERFUME Uncaught runtime error:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('abdulmejid_cart');
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#163C32] text-[#F8F6F0] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#0e2720] border border-[#C6A66B]/40 rounded-lg p-8 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#163C32] border border-[#C6A66B] flex items-center justify-center mx-auto text-[#C6A66B] font-serif text-2xl font-bold">
              AP
            </div>
            
            <div className="space-y-2">
              <h1 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0]">
                ABDULMEJID PERFUME
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
                Merkato, Addis Ababa
              </p>
            </div>

            <p className="text-sm text-[#F8F6F0]/80 font-light leading-relaxed">
              We encountered a slight issue loading your boutique experience. Click below to reload and restore the fragrance collection.
            </p>

            <button
              onClick={this.handleReset}
              className="w-full py-3.5 px-6 bg-[#C6A66B] hover:bg-[#DFC89B] text-[#163C32] font-semibold text-xs tracking-[0.16em] uppercase rounded-sm transition-all shadow-md cursor-pointer"
            >
              Reload Fragrance Boutique
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
