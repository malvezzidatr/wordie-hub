import { FaComment, FaLanguage } from "react-icons/fa6";

interface FlashcardExample {
  title: string;
  subtitle: string;
  language: string;
  backTitle: string;
  backLanguage: string;
}

export const FlashcardExample = ({
  language,
  subtitle,
  title,
  backTitle,
  backLanguage,
}: FlashcardExample) => {
  return (
    <label key={title + language} className="w-[480px] h-[360px] [perspective:1000px] cursor-pointer block">
      <input defaultChecked={false} type="checkbox" className="peer hidden" />
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] peer-checked:[transform:rotateY(180deg)] rounded-lg">

        {/* Frente */}
          <div className="absolute bg-white w-full h-full" style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}>

          <div className="card w-[480px] h-full">
            <div className="card-body items-center flex justify-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="text-neutral-600 text-xl">
                  <FaComment />
                </i>
              </div>
              <div className="badge border-none bg-neutral-100 text-black mb-4">{language}</div>
              <h2 className="text-3xl text-neutral-900 mb-4">{title}</h2>
              <p className="text-neutral-500 mb-6">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Verso */}
          <div
            className="absolute bg-white w-full h-full"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
          >
          <div className="card w-[480px] shadow-md hover:shadow-xl transition-shadow h-full">
            <div className="card-body items-center flex">
              <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="text-neutral-600 text-xl">
                  <FaLanguage />
                </i>
              </div>
              <div className="badge border-none bg-neutral-100 text-black mb-4">{backLanguage}</div>
              <h2 className="text-3xl text-neutral-900 mb-4">{backTitle}</h2>
            </div>
          </div>
        </div>

      </div>
    </label>
  )
}
