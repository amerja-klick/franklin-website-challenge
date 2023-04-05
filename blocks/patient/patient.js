export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`patient-${cols.length}-col`);
  
    // setup text columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('img');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // text is only content in column
            picWrapper.classList.add('columns-img-col');
          }
        }
      });
    });
  }