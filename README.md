# Dom - Rodzinny Panel Organizacyjny (z bazą w GitHubie)

Wierna, w pełni interaktywna aplikacja organizacji domowej dla całej rodziny, która może działać na wielu urządzeniach jednocześnie z **darmową bazą danych i darmowym hostingiem w GitHubie**.

---

## ☁️ Jak działa baza danych w GitHubie?

1. **Plik bazy danych (`dom-data.json`)** znajduje się w Twoim repozytorium na GitHubie.
2. **Hosting (GitHub Pages)**: Aplikacja ma publiczny adres internetowy (np. `https://twoj-login.github.io/dom-dashboard/`), dostępny z każdego telefonu, tabletu i komputera.
3. **Synchronizacja w czasie rzeczywistym**:
   - Gdy ktokolwiek z rodziny odhaczy zadanie lub doda produkt do zakupów, aplikacja automatycznie zapisuje zmianę w GitHubie przez oficjalne GitHub API.
   - Pozostałe telefony domowników automatycznie pobierają zmiany co 20 sekund oraz przy każdym otwarciu aplikacji!
4. **Magiczny link dla rodziny**:
   - Wystarczy skonfigurować połączenie raz na jednym urządzeniu.
   - Klikasz **„🔗 Wygeneruj link dla rodziny”** i wysyłasz link domownikom (np. na WhatsApp).
   - Domownicy otwierają link na swoich telefonach i od razu są połączeni ze wspólną bazą – bez wpisywania haseł i tokenów!

---

## 🛠️ Instrukcja uruchomienia z GitHubem (Krok po kroku)

### Krok 1: Utwórz darmowe repozytorium na GitHubie
1. Wejdź na [github.com](https://github.com) i zaloguj się na swoje konto.
2. Kliknij zielony przycisk **„New”** (lub wejdź na [github.com/new](https://github.com/new)).
3. Wpisz nazwę, np. `dom-dashboard`.
4. Ustaw repozytorium jako **Public** (aby móc użyć darmowego GitHub Pages) lub Private.
5. Kliknij **„Create repository”**.

### Krok 2: Wgraj pliki projektu
Możesz to zrobić bezpośrednio w przeglądarce:
1. Na stronie nowo utworzonego repozytorium kliknij **„uploading an existing file”**.
2. Przeciągnij wszystkie pliki z folderu `/Users/agnieszkamalik/.gemini/antigravity/scratch/dom-dashboard`:
   - `index.html`
   - `dom-data.json`
   - `manifest.json`
   - `sw.js`
   - folder `assets` ze zdjęciami i ikonami
3. Kliknij zielony przycisk **„Commit changes”**.

### Krok 3: Włącz darmowy hosting (GitHub Pages)
1. W Twoim repozytorium wejdź w zakładkę **Settings** (na górnym pasku).
2. W menu po lewej stronie kliknij **Pages**.
3. W sekcji *Build and deployment* -> *Source* wybierz: **Deploy from a branch**.
4. Wybierz gałąź **main** i folder **/ (root)**, a następnie kliknij **Save**.
5. Po 1-2 minutach otrzymasz swój własny adres strony, np.:  
   `https://twoj-login.github.io/dom-dashboard/`

### Krok 4: Wygeneruj darmowy token GitHub (1 minuta)
Token jest potrzebny, aby telefony mogły zapisywać zmiany do bazy na GitHubie:
1. Wejdź w [github.com/settings/tokens](https://github.com/settings/tokens?type=beta) (*Fine-grained personal access tokens*).
2. Kliknij **Generate new token**.
3. Wpisz nazwę (np. `Dom App`).
4. W sekcji *Repository access* wybierz: **Only select repositories** -> wskaż swoje repozytorium `dom-dashboard`.
5. W sekcji *Permissions* -> *Repository permissions* znajdź **Contents** i ustaw na **Access: Read and write**.
6. Kliknij **Generate token** i skopiuj wygenerowany klucz (zaczynający się od `github_pat_`).

### Krok 5: Połącz aplikację i wyślij link rodzinie!
1. Otwórz swoją stronę (na komputerze lub telefonie).
2. Wejdź w **Ustawienia** -> sekcja **„Baza w GitHub (Chmura)”**.
3. Wklej:
   - Repozytorium: `twoj-login/dom-dashboard`
   - Token: Twój wygenerowany klucz
4. Kliknij **Zapisz i połącz** – pojawi się zielony status: *🟢 Połączono z GitHubem*.
5. Kliknij przycisk **„🔗 Wygeneruj link dla rodziny”**.
6. Wyślij skopiowany link partnerowi / dzieciom. Gdy go klikną na swoich telefonach, ich aplikacje połączą się automatycznie!

---

## 📲 Jak zainstalować jako aplikację na telefonie (PWA)?

- **Na iPhone (iOS / Safari):**
  1. Otwórz link do aplikacji w przeglądarce **Safari**.
  2. Kliknij ikonę udostępniania (kwadrat ze strzałką w górę u dołu ekranu).
  3. Wybierz opcję **„Do ekranu początkowego”** (Add to Home Screen).
  4. Na pulpicie pojawi się elegancka ikonka **Dom** – aplikacja uruchamia się w pełnym ekranie bez pasków przeglądarki!

- **Na Androidzie (Chrome):**
  1. Otwórz link w przeglądarce **Chrome**.
  2. Kliknij menu (trzy kropki w prawym górnym rogu).
  3. Wybierz **„Zainstaluj aplikację”** lub **„Dodaj do ekranu głównego”**.
