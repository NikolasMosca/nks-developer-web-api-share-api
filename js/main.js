// Funzione che trasforma un url in un File
const createFile = async (file, name, type) => {
  const response = await fetch(file);
  const data = await response.blob();
  return new File([data], name, {
    type
  });
};

// Funzione lanciata all'evento di click su un bottone
async function onClickButton() {
  try {
    // In base all'id passo uno shareData diverso
    const shareData = {
      text: {
        title: "Titolo di prova condivisione",
        text: "Testo di prova condivisione",
      },
      link: {
        title: "Titolo di prova condivisione",
        text: "Testo di prova condivisione",
        url: "https://www.youtube.com/channel/UCxilIGR0H0mrMM4Qmi8YDqQ?sub_confirmation=1",
      },
      image: {
        title: "Titolo di prova condivisione",
        text: "Testo di prova condivisione",
        files: [await createFile("/img/test.png", "immagine.png", "image/png")],
      },
      pdf: {
        title: "Titolo di prova condivisione",
        text: "Testo di prova condivisione",
        files: [await createFile("/files/file.pdf", "documento.pdf", "application/pdf")],
      },
      all: {
        title: "Titolo di prova condivisione",
        text: "Testo di prova condivisione",
        files: [
          await createFile("/img/test.png", "immagine.png", "image/png"),
          await createFile("/files/file.pdf", "documento.pdf", "application/pdf")
        ],
      },
    }[this.id];
    // Eseguo la WEB API Share
    await navigator.share(shareData);
  } catch (err) {
    alert(`Error: ${err}`);
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", onClickButton));
