import { Subject } from 'rxjs';

export class PostService {

    postsSubject = new Subject<any[]>();

    // Array contenant les différents posts
    private posts = [
        {
            id: 1,
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
            loveIts: 0,
            created_at: new Date()
        },
        {
            id: 2,
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
            loveIts: 0,
            created_at: new Date()
        },
        {
            id: 3,
            title: 'Mon troisième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
            loveIts: 0,
            created_at: new Date()
        }
    ];

    addPost(titre: string, contenu: string) {
        const postObject = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        };
        postObject.title = titre;
        postObject.content = contenu;
        postObject.id = this.posts[(this.posts.length - 1)].id + 1;
        this.posts.push(postObject);
        this.emitPostsSubject;
    }

    deletePost(index: number){
        this.posts.splice(index, 1);
    }

    emitPostsSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    // Fonction permettant d'ajouter un like
    onLike(i: number) {
        this.posts[i].loveIts++;
    }

    // Fonction permettant d'enlever un like
    onDislike(i: number) {
        this.posts[i].loveIts--;
    }
}