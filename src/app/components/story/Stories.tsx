/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
  PinkButton,
  ScreenContainer,
  StyledContainer,
  StyledPopUpCard,
  StyledScroller,
  SuggestedTitle,
} from './Stories.style';
import Header from '../header/Header';
import { useScrollHandler } from '../../hooks/use-scroll-handler';
import BottomNavigation from '../bottom-nav/BottomNav';

interface StoryProps {
  title: string;
  description: string;
  image?: string;
  date: string;
}

const Stories: React.FC = () => {
  const [posts, setPosts] = useState<StoryProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | undefined>();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const savedPosts = localStorage.getItem('stories');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(posts));
  }, [posts]);

  const handleDelete = (index: number) => {
    const updated = posts.filter((_, i) => i !== index);
    setPosts(updated);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handlePost = () => {
    if (!title || !description) return alert('Please fill everything!');

    const newPost = {
      title,
      description,
      image,
      date: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);

    setTitle('');
    setDescription('');
    setImage(undefined);
    setShowModal(false);
  };

  const { handleScroll } = useScrollHandler(setIsScrolling);

  return (
    <>
      <ScreenContainer>
        <Header title='Stories' />
        <StyledScroller onScroll={handleScroll}>
          {posts.length === 0 ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                marginTop: '24px',
              }}
            >
              <StyledContainer
                style={{
                  background: 'linear-gradient(180deg, #FAF0E6 0%, #FDEDF4 100%)',
                  minHeight: '70vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '2rem',
                }}
              >
                <h1
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    color: 'purple',
                    marginBottom: '0.5rem',
                  }}
                >
                  Share your story
                </h1>

                <p
                  style={{
                    fontSize: '1.5rem',
                    maxWidth: '320px',
                    color: '#6b6b6b',
                    marginBottom: '2rem',
                  }}
                >
                  Your words can inspire someone. Tell us about a moment, a feeling, or something
                  you learned.
                </p>
                <PinkButton onClick={() => setShowModal(true)}>Add a Story</PinkButton>
              </StyledContainer>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: '16px',
                }}
              >
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    fontSize: 28,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffbfdc',
                    color: 'white',
                  }}
                >
                  +
                </button>
              </div>
              <SuggestedTitle>Recent Stories</SuggestedTitle>
            </>
          )}

          <div
            style={{
              fontFamily: 'Arial',
              textAlign: 'center',
            }}
          >
            {showModal && (
              <>
                <div
                  style={{
                    position: 'fixed',
                    inset: 0,
                    backdropFilter: 'blur(6px)',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                    zIndex: 10,
                  }}
                  onClick={() => setShowModal(false)}
                />

                <StyledPopUpCard>
                  <h3 style={{ fontFamily: 'Work Sans' }}>Create a Story</h3>

                  <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      width: '100%',
                      marginBottom: 8,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                    }}
                  />

                  <textarea
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      width: '100%',
                      height: 80,
                      marginBottom: 8,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                    }}
                  />

                  <input type='file' accept='image/*' onChange={handleImageUpload} />

                  {image && (
                    <img
                      src={image}
                      alt=''
                      style={{ width: '100%', marginTop: 10, borderRadius: 8 }}
                    />
                  )}

                  <button
                    onClick={handlePost}
                    style={{
                      marginTop: 10,
                      padding: '8px 16px',
                      cursor: 'pointer',
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      borderRadius: '8px',
                      backgroundColor: '#ffbfdc',
                    }}
                  >
                    Post
                  </button>
                </StyledPopUpCard>
              </>
            )}

            {[...posts].reverse().map((post, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: 16,
                  padding: 12,
                  marginBottom: 16,
                  textAlign: 'left',
                  borderColor: '#ff69b4',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                }}
              >
                <p style={{ fontSize: 12, color: '#888' }}>
                  {new Date(post.date).toLocaleString()}
                </p>
                <h3>{post.title}</h3>
                {post.image && (
                  <img src={post.image} alt='' style={{ width: '100%', borderRadius: 10 }} />
                )}
                <p>{post.description}</p>
                <button
                  onClick={() => handleDelete(posts.length - 1 - i)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: 18,
                    cursor: 'pointer',
                    color: '#ff4d6d',
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </StyledScroller>
        <BottomNavigation></BottomNavigation>
      </ScreenContainer>
    </>
  );
};

export default Stories;
