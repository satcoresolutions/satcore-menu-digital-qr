import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
        {/* Presentación */}
        <section className="mb-8 w-full max-w-3xl text-center sm:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Menú digital
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-muted sm:text-base">
            Consulta nuestra carta, descubre platos y bebidas, y encuentra
            fácilmente lo que buscas.
          </p>
        </section>

        {/* Aplicación */}
        <section
          className="w-full max-w-7xl"
          aria-label="Menú digital"
        >
          <Menu />
        </section>
      </main>
    </div>
  );
}
