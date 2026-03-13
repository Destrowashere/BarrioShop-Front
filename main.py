"""
Barrio Shop - Gestión de Ventas

Aplicación de escritorio que usa una PILA (estructura de datos) para gestionar
el historial de ventas. El principio LIFO (Last In, First Out) significa:
"El último elemento agregado es el primero en salir/verse".

Visualmente: imagina una pila de platos. El plato que pones arriba es el que
sacas primero. Las ventas se apilan igual: la más reciente está "arriba".
"""

import customtkinter as ctk
from tkinter import messagebox

# Configuración de apariencia
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")


class BarrioShop(ctk.CTk):
    """
    Ventana principal de Barrio Shop.

    Contiene:
    - Pantalla de login (usuario/contraseña simulados)
    - Panel de ventas con operaciones sobre la pila
    - Área de texto para mostrar resultados
    """

    def __init__(self):
        super().__init__()
        self.title("Barrio Shop - Gestión de Ventas")
        self.geometry("400x500")

        # --- Lógica de la Pila (Historial) ---
        # Usamos una lista de Python como Pila (LIFO: Last In, First Out)
        # append() = Push (agregar arriba), [-1] = Peek (ver el de arriba)
        self.pila_ventas = []

        # --- Interfaz de Login ---
        self.frame_login = ctk.CTkFrame(self)
        self.frame_login.pack(pady=20, padx=60, fill="both", expand=True)

        self.label = ctk.CTkLabel(self.frame_login, text="FELIX LOGIN", font=("Roboto", 24))
        self.label.pack(pady=12, padx=10)

        self.entry1 = ctk.CTkEntry(self.frame_login, placeholder_text="Usuario")
        self.entry1.pack(pady=12, padx=10)

        self.entry2 = ctk.CTkEntry(self.frame_login, placeholder_text="Contraseña", show="*")
        self.entry2.pack(pady=12, padx=10)

        self.button = ctk.CTkButton(self.frame_login, text="Iniciar Sesión", command=self.login)
        self.button.pack(pady=12, padx=10)

    def login(self):
        """
        Valida el login y cambia a la pantalla principal.

        Lógica: Si el usuario escribió algo en el campo de usuario, oculta
        el frame de login y muestra el panel de ventas. Si está vacío,
        muestra una advertencia.
        """
        user = self.entry1.get()
        if user:
            self.frame_login.pack_forget()  # Ocultar login
            self.mostrar_panel_ventas(user)  # Mostrar app principal
        else:
            messagebox.showwarning("Error", "Por favor ingresa un usuario")

    def mostrar_panel_ventas(self, usuario):
        """
        Crea y muestra el panel principal de ventas.

        Visual: Muestra un mensaje de bienvenida con el nombre del usuario,
        tres botones (Registrar, Ver última, Historial) y un área de texto
        donde se muestran los resultados de las operaciones.
        """
        self.frame_ventas = ctk.CTkFrame(self)
        self.frame_ventas.pack(pady=20, padx=20, fill="both", expand=True)

        self.lbl_bienvenida = ctk.CTkLabel(
            self.frame_ventas, text=f"Bienvenido, {usuario}", font=("Roboto", 18)
        )
        self.lbl_bienvenida.pack(pady=10)

        # Botones de acción
        self.btn_registrar = ctk.CTkButton(
            self.frame_ventas, text="Registrar Venta", command=self.registrar_venta
        )
        self.btn_registrar.pack(pady=5)

        self.btn_ultima = ctk.CTkButton(
            self.frame_ventas,
            text="Ver última venta",
            command=self.ver_ultima_venta,
            fg_color="green",
        )
        self.btn_ultima.pack(pady=5)

        self.btn_historial = ctk.CTkButton(
            self.frame_ventas,
            text="Mostrar Historial",
            command=self.mostrar_historial,
            fg_color="gray",
        )
        self.btn_historial.pack(pady=5)

        # Área de texto para mostrar resultados
        self.texto_display = ctk.CTkTextbox(self.frame_ventas, height=150)
        self.texto_display.pack(pady=10, padx=10, fill="x")

    # --- Operaciones de la Pila ---

    def registrar_venta(self):
        """
        Agrega una nueva venta a la pila (operación PUSH).

        Lógica: Genera un ID único y añade la venta al final de la lista.
        En una pila, "al final" significa "arriba" (el tope). La venta
        queda como la más reciente y será la primera en verse al consultar.

        Visual: Como poner un plato nuevo encima de la pila.
        """
        id_venta = len(self.pila_ventas) + 1
        nombre_venta = f"Venta {id_venta}"
        self.pila_ventas.append(nombre_venta)  # Push: agregar al tope de la pila
        self.texto_display.insert("0.0", f"Registrado: {nombre_venta}\n")

    def ver_ultima_venta(self):
        """
        Muestra la venta que está en el tope de la pila (operación PEEK).

        Lógica: Accede al último elemento de la lista (índice -1), que
        corresponde al tope de la pila. No lo elimina, solo lo consulta.
        Si la pila está vacía, muestra una advertencia.

        Visual: Mirar el plato que está arriba sin sacarlo.
        """
        if self.pila_ventas:
            ultima = self.pila_ventas[-1]  # Peek: ver el elemento del tope
            messagebox.showinfo("Última Venta", f"La última venta fue: {ultima}")
        else:
            messagebox.showwarning("Vacío", "No hay ventas registradas.")

    def mostrar_historial(self):
        """
        Muestra todas las ventas en orden de la más reciente a la más antigua.

        Lógica: La pila guarda las ventas con la más nueva al final. Para
        mostrarlas en orden "de arriba hacia abajo" (más reciente primero),
        invertimos la lista con reversed(). Así respetamos el principio LIFO:
        el último agregado aparece primero en la lista.
        """
        if not self.pila_ventas:
            self.texto_display.delete("0.0", "end")
            self.texto_display.insert("0.0", "Historial vacío.")
            return

        # Mostramos en orden inverso: más reciente → más antigua
        historial = " - ".join(reversed(self.pila_ventas))
        self.texto_display.delete("0.0", "end")
        self.texto_display.insert("0.0", f"HISTORIAL:\n{historial}")


if __name__ == "__main__":
    app = BarrioShop()
    app.mainloop()
