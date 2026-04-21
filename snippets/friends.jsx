import React, { useState, useEffect } from 'react';

export const FriendCard = ({ name, role, image, bio, url }) => {
	const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=E8F4F5&color=358e98`;

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-start gap-5 p-6 rounded-2xl w-full
               not-prose no-underline
               bg-white/80 dark:bg-zinc-900/60
               border border-zinc-200/60 dark:border-zinc-700/40
               hover:border-[#358e98]/50 dark:hover:border-[#71c6db]/30
               transition-colors duration-200"
		>
			<div className="shrink-0">
				<div className="w-16 h-16 rounded-full overflow-hidden bg-[#358e98]/10 ring-2 ring-[#358e98]/20">
					<img
						src={image || fallbackAvatar}
						alt={name}
						loading="lazy"
						className="w-full h-full object-cover m-0"
						onError={(e) => {
							e.currentTarget.src = fallbackAvatar;
						}}
					/>
				</div>
			</div>

			<div className="flex-1 min-w-0">
				<div className="flex items-center justify-between gap-3 mb-2">
					<h3 className="text-lg font-semibold m-0 text-zinc-900 dark:text-zinc-100 truncate">
						{name}
					</h3>
					<span className="shrink-0 text-xs font-medium text-[#358e98] dark:text-[#71c6db] bg-[#358e98]/10 dark:bg-[#71c6db]/10 px-3 py-1 rounded-full border border-[#358e98]/20 dark:border-[#71c6db]/20">
						{role}
					</span>
				</div>

				<p className="text-sm text-zinc-600 dark:text-zinc-400 m-0 leading-relaxed line-clamp-2">
					{bio}
				</p>
			</div>
		</a>
	);
};

export const FriendList = ({ children }) => {
	const [shuffledChildren, setShuffledChildren] = useState([]);

	useEffect(() => {
		const childrenArray = React.Children.toArray(children);
		const shuffled = [...childrenArray].sort(() => Math.random() - 0.5);
		setShuffledChildren(shuffled);
	}, [children]);

	const renderChildren = shuffledChildren.length > 0 ? shuffledChildren : children;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mx-auto my-10">
			{renderChildren}
		</div>
	);
};