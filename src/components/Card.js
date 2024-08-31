import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
export default function Card(props){
    let review=props.review;
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image}></img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-.25rem] z-[-1] left-[4px] '></div>
            </div>
            <div className='text-center mt-1'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
            </div>
            <div className='text-center'>
                <p className='text-violet-300 uppercase text-sm'>{review.post}</p>
            </div>
            <div className='text-violet-400 mx-auto mt-5 '>
                <FaQuoteLeft/>
            </div>
            <div className='text-center mt-3 text-slate-700'>
                {review.text}
            </div>
            <div className='text-violet-400 mx-auto mt-3'>
                <FaQuoteRight/>
            </div>
        </div>
    )
}